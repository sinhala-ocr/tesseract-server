import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TessdataService {

  constructor(private http: HttpClient) {
  }

  public getTrainedData(): Promise<Object> {
    return this.http.get(`/api/tessconfig/traineddata/all`).toPromise();
  }

  public setDefaultTrainedData(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: {
        id: id
      }
    };

    return this.http.post<any>(`/api/tessconfig/traineddata/setdefault`, {}, httpOptions).toPromise()
      .catch(err => console.log(err));
  }

  public setTrainedDataProperties(id: string, newName: string, newDescription: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: {
        id: id,
        newName: newName,
        newDescription: newDescription
      }
    };

    return this.http.post<any>(`/api/tessconfig/traineddata/save`, {}, httpOptions).toPromise()
      .catch(err => console.log(err));
  }

  public deleteTrainedData(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: {
        id: id
      }
    };

    return this.http.delete<any>(`/api/tessconfig/traineddata/delete`, httpOptions).toPromise()
      .catch(err => console.log(err));
  }

}
