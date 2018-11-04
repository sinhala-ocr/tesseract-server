import { Letter } from "./letter";

export class Word {

  readonly STYLE_NAME = {
    'NOT_IN_DICTIONARY' : 'flag-word-not-in-dictionary',
    'HAS_SUGGESTIONS'   : 'flag-word-has-suggestions'
  }

  value: string;
  level: number;
  letters: Letter[];
  flags: string[];
  suggestions: Word[];
  selected: number;

  constructor(value: string) {
    this.value = value;
    this.level = 0;
    this.letters = [];
    this.flags = [];
    this.suggestions = [];
    this.selected = -1;
  }

  setLevel(level: string){
    this.level = Number(level);
  }

  setFlags(flags: string[]){
    for (var f in flags){
      this.flags.push(flags[f]);
    }
  }

  addSuggestion(sugg: Word){
    this.suggestions.push(sugg);
  }

  getSuggestion(index: number){
    return this.suggestions[index];
  }

  getStyle() {
    if (this.flags.length > 0){
      return this.STYLE_NAME[this.flags[0]];
    }
    return "";
  }

  getLetters(){
    if (this.selected > 0){
      return this.suggestions[this.selected].letters;
    } else {
      return this.letters;
    }
  }

  hasSuggestions(){
    return this.suggestions.length > 0;
  }
}

