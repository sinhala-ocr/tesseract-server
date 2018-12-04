import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GrammarService } from '../../services/grammar.service';
import { DocService } from '../../services/doc.service';
import {Word} from '../../models/word';
import {Letter} from '../../models/letter';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss'],
  preserveWhitespaces: false
})
export class GrammarComponent implements OnInit {
  public inputText;
  public outputText;
  public fileList;
  public selectedFile;
  public temp = ``;

  public docModel: Word[];

  constructor(private http: HttpClient, public grammarService: GrammarService, private docService: DocService) {
    grammarService.getOutputFileList().subscribe((res) => {
      this.fileList = res;
      console.log(res)
    });

    this.temp = `[
      {
        "value": "sumedhe",
        "level": "2",
        "flags": ["HAS_SUGGESTIONS"],
        "letters": [
          {"value":"s"},
          {"value":"u"},
          {"value":"m"},
          {
            "value":"e",
            "flags": ["OPTIONAL"]
          },
          {"value":"d"},
          {"value":"h"},
          {"value":"e"}
        ],
        "suggestions": [
          {
            "value": "SUME",
            "letters": [
              {"value":"S"},
              {"value":"U"},
              {"value":"M"},
              {"value":"E"}
            ]
          },
          {
            "value": "SUMEDHE",
            "letters" : [
              {"value":"S"},
              {"value":"U"},
              {"value":"M"},
              {"value":"E"},
              {"value":"D"},
              {"value":"H"},
              {"value":"E"}
            ]
          }
        ]
      },
      {
        "value": "diss",
        "level": "1",
        "letters": [
          {"value":"d"},
          {"value":"i"},
          {
            "value":"s",
            "flags":["CHARACTER_LEGITIMACY_ERROR"]
          },
          {"value":"s"}
        ],
        "flags": ["NOT_IN_DICTIONARY_ERROR"]
      },
      {
        "value": "abcd",
        "level": "1",
        "letters": [
          {"value":"a"},
          {"value":"b"},
          {
            "value":"c",
            "flags":["GRAMMAR_LEGITIMACY_ERROR"]
          },
          {"value":"d"}
        ]
      }
]`;
  }


  // Render output
  onClickSaveModified(){
    this.grammarService.saveFile(this.docService.modelToDoc(this.docModel), this.selectedFile).subscribe((res) => {
      console.log(res);
    })
  }

  // On click process button
  onClickProcessButton(){
    if (!this.selectedFile) return;
    
    this.grammarService.grammarCheck(this.selectedFile).subscribe((res) => {
      console.log(res);
      this.inputText = res['input'].split("\n").join("<br>"); 
      this.docModel = this.docService.docToModel(JSON.stringify(res['output']));
    }, (err) => {
      console.log(err);
    });
  }

  // On suggestion word clicked on word dropdown menu
  onWordSuggestionClick(word: Word, suggestion: Word){
    word.selected = word.suggestions.indexOf(suggestion);
  }

  // On delete menu item clicked
  onLetterDeleteClick(letter: Letter){
    letter.modifyTo("");
  }

  // On Undo menu item clicked
  onLetterResetClick(letter: Letter){
    letter.reset();
  }



  ngOnInit() {
  }

}
