import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrammarService {

  constructor(private http: HttpClient) {
  }

  readonly baseURL = '/api/grammar';

  // Grammar check for output
  grammarCheck(text: string) {
    var headers = new HttpHeaders({
        'Content-Type': 'text/plain'
    });
    
    return this.http.post(this.baseURL + '/process', text, {headers: headers})
  }

  // Get File list
  getOutputFileList() {
    return this.http.get(this.baseURL + '/get-test-dir-list');
  }

  // Load file from the server
  loadFile(path: string) {
    return this.http.get(this.baseURL + '/load-recog-output?testDirPath=' + path);
  }

  // Save modified output in the server
  saveFile(text: string, path: string){
    return this.http.get(this.baseURL + '/save-modified-output?testDirPath=' + path + "&text=" + text);
  }

}
