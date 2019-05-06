import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GrammarService } from '../../services/grammar.service';
import { DocService } from '../../services/doc.service';
import {Word} from '../../models/word';
import {Letter} from '../../models/letter';
import { file } from 'babel-types';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss'],
  preserveWhitespaces: false
})
export class GrammarComponent implements OnInit {
  @ViewChild('file') file;
  @ViewChild('fileOriginal') fileOriginal;

  public inputText;
  public outputText;
  public fileList;
  public selectedFile;
  public temp = ``;
  public openedFile;

  private fileNumber;
  private recognizedText;
  private recognizedFile;
  private recognizedTextFilename;
  private originalText;
  private originalTextFilename;
  public docModel: Word[];

  constructor(private http: HttpClient, public grammarService: GrammarService, private docService: DocService) {
    grammarService.getOutputFileList().subscribe((res) => {
      this.fileList = res;
      console.log(res)
    });
  }



  // Open Recognized file
  onClickSelectOriginalFile(){
      this.fileNumber = 0;
      this.file.nativeElement.click();
  }

  onClickSelectRecognizedFile(){
      this.fileNumber = 1;
      this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (const key in files) {
      if (!isNaN(parseInt(key))) {
        var reader = new FileReader();
        reader.readAsText(files[key]);
        var me = this;
        reader.onload = function () {
            if (me.fileNumber == 0) {
                me.originalText = reader.result;
                me.originalTextFilename = files[key].name
            } else {
                me.recognizedText = reader.result;
                me.recognizedFile = files[key]
                me.recognizedTextFilename = files[key].name
            }
        }
        return
      }
    }
  }



  // Render output
  onClickSaveModified(){
    this.grammarService.saveFile(this.docService.modelToDoc(this.docModel), this.selectedFile).subscribe((res) => {
      console.log(res);
    })
  }

  // On click process button
  onClickProcessButton(){
    if (!this.recognizedText) return;
    
    this.grammarService.grammarCheck(this.recognizedText).subscribe((res) => {
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

  // On click download button
  onClickDownloadButton(){
    if (this.recognizedFile == null) {
        return;
    }

    var filename = this.recognizedFile.name; 
    filename = filename.substring(0, filename.length-4) + ' (modified).txt';

    const blob = new Blob([this.docService.modelToDoc(this.docModel)], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, filename);
  }


  ngOnInit() {
    this.openedFile = "RECOGNIZED";
  }

}

// Sample responce doc format
// `[
//     {
//       "value": "sumedhe",
//       "level": "2",
//       "flags": ["HAS_SUGGESTIONS"],
//       "letters": [
//         {"value":"s"},
//         {"value":"u"},
//         {"value":"m"},
//         {
//           "value":"e",
//           "flags": ["OPTIONAL"]
//         },
//         {"value":"d"},
//         {"value":"h"},
//         {"value":"e"}
//       ],
//       "suggestions": [
//         {
//           "value": "SUME",
//           "letters": [
//             {"value":"S"},
//             {"value":"U"},
//             {"value":"M"},
//             {"value":"E"}
//           ]
//         },
//         {
//           "value": "SUMEDHE",
//           "letters" : [
//             {"value":"S"},
//             {"value":"U"},
//             {"value":"M"},
//             {"value":"E"},
//             {"value":"D"},
//             {"value":"H"},
//             {"value":"E"}
//           ]
//         }
//       ]
//     },
//     {
//       "value": "diss",
//       "level": "1",
//       "letters": [
//         {"value":"d"},
//         {"value":"i"},
//         {
//           "value":"s",
//           "flags":["CHARACTER_LEGITIMACY_ERROR"]
//         },
//         {"value":"s"}
//       ],
//       "flags": ["NOT_IN_DICTIONARY_ERROR"]
//     },
//     {
//       "value": "abcd",
//       "level": "1",
//       "letters": [
//         {"value":"a"},
//         {"value":"b"},
//         {
//           "value":"c",
//           "flags":["GRAMMAR_LEGITIMACY_ERROR"]
//         },
//         {"value":"d"}
//       ]
//     }
// ]`;