import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrammarService {

  constructor(private http: HttpClient) {
  }

  readonly baseURL = 'http://localhost:4000/api/grammar';

  // Grammar check for output
  grammarCheck(filename: string) {
    let data = {
      filename: filename
    };
    return this.http.post(this.baseURL, data);
  }

  // Get File list
  getOutputFileList() {
    return this.http.get(this.baseURL + '/output-file-list');
  }

  // Load file from the server
  loadFile(path: string) {
    return this.http.get(this.baseURL + '/load-file?filename=' + path);
  }

}
