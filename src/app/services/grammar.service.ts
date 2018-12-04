import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrammarService {

  constructor(private http: HttpClient) {
  }

  readonly baseURL = 'http://localhost:8080/grammar';

  // Grammar check for output
  grammarCheck(path: string) {
    return this.http.get(this.baseURL + '/process?testDirPath=' + path);
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
