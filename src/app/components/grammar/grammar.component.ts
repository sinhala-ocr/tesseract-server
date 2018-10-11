import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss']
})
export class GrammarComponent implements OnInit {
  public inputText;
  public outputText;

  constructor(private http: HttpClient) {
    
  }

  onClickProcessButton(){
    // this.http.get('/api/grammar-check').subscribe(data => {
    //   // Process data
    // });
  }

  ngOnInit() {
  }

}
