import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import * as _moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  private libraryPath: string;

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: {
        dir: 'TESS_STORAGE_LIBRARY'
      }
    };

    this.http.get<any>(`http://localhost:8080/admin/path`, httpOptions).toPromise()
      .then(res => {
        this.libraryPath = res.savedPath;
      })
      .catch(err => console.log(err));
  }

  public upload(files: Set<File>): { [key: string]: Observable<number> } {
    // this will be the our resulting map
    const status = {};

    // Timestamp
    const now       = _moment();
    const timestamp = now.format('YYYYMMDDHHmmss');
    const dirPath   = this.libraryPath + '/' + timestamp;

    files.forEach(file => {
      // create a new multipart-form for every file
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      // create a http-post request and pass the form
      // tell it to report the upload progress
      const req = new HttpRequest('POST', `http://localhost:8080/upload/post`, formData, {
        reportProgress: true,
        responseType: 'text'
      });

      // create a new progress-subject for every file
      const progress = new Subject<number>();

      // send the http-request and subscribe for progress-updates
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {

          // calculate the progress percentage
          const percentDone = Math.round(100 * event.loaded / event.total);

          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          progress.complete();

          // Process
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            }),
            params: {
              outputDirPath: dirPath + '/' + file.name.split('.').slice(0, -1).join('.'),
              originalFileName: file.name
            }
          };
          this.http.post<any>(`http://localhost:8080/process`, {}, httpOptions).toPromise()
            .then(res => console.log(res))
            .catch(err => console.log(err));
        } else {
        }
      });

      // Save every progress-observable in a map of all observables
      status[file.name] = {
        progress: progress.asObservable()
      };
    });

    // return the map of progress.observables
    return status;
  }
}
