import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor() { }

  docToHtml(docText: string){
    const STYLE_NAME = {
      'NOT_IN_DICTIONARY_ERROR'     : 'not-in-dictionary-error',
      'NOT_IN_EXBLOCK_ERROR'        : 'not-in-exblock-error',
      'MODIFIER_IN_THE_BEGIN_ERROR' : 'modifier-in-the-begin-error',
      'VOWEL_IN_THE_MIDDLE_ERROR'   : 'vowel-in-the-middle-error'
    }

    var doc: any = JSON.parse(docText);
    var html = '';

    // For each word in doc
    for (var w in doc){
      if (doc.hasOwnProperty(w)){
        var letters = doc[w].letters;
        
        // Mard dictionary error
        if (doc[w].hasOwnProperty('errors')){
          html += '<span class="' + STYLE_NAME[doc[w].errors[0]] + '">';
        }
        // For each letter in word
        for (var l in letters){
          if (letters.hasOwnProperty(l)){
            if (letters[l].hasOwnProperty('errors')){
              // Mark letter errors
              html += '<span class="' + STYLE_NAME[letters[l].errors[0]] + '">' + letters[l].value + '</span>';
            } else {
              html += letters[l].value;
            }
          }
        }

        // Close dictionary error mark
        if (doc[w].hasOwnProperty('errors')){
          html += '</span>';
        }
        
        html += ' ';
      }
    }
    console.log(html)
    return html;
  }

  // Grammar check
  test(text: string){
    return "x";
  }
}
