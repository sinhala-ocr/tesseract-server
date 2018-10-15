import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GrammarService } from '../../services/grammar.service';
import { DocService } from '../../services/doc.service';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss']
})
export class GrammarComponent implements OnInit {
  public inputText;
  public outputText;

  constructor(private http: HttpClient, public grammarService: GrammarService, private docService: DocService) {
    
  }

  onClickProcessButton(){
    this.grammarService.grammarCheck(this.inputText).subscribe((res) => {
      this.outputText = this.docService.docToHtml(JSON.stringify(res));
    }, (err) => {
      console.log(err);
    });
    
  }

  ngOnInit() {
  }

}
