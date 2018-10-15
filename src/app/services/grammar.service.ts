import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { text } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class GrammarService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:4000/api/grammar';

  // Grammar check
  grammarCheck(text: string){
    // console.log(text);
    var data = {
      text: text
    }
    return this.http.post(this.baseURL, data);
  }


}
