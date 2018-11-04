export class Letter {

  readonly STYLE_NAME = {
    'CHARACTER_LEGITIMACY_ERROR' : 'flag-letter-character-legitimacy-error',
    'GRAMMAR_LEGITIMACY_ERROR'   : 'flag-letter-grammar-legitimacy-error',
    'CHANGED'                    : 'flag-letter-changed',
    'OPTIONAL'                   : 'flag-letter-optional'
  }

  value: string;
  flags: string[];
  isModified: boolean;
  newValue: string;

  constructor(value: string) {
    this.value = value;
    this.flags = [];
    this.isModified = false;
    this.newValue = "";
  }

  setFlags(flags: string[]){
    for (var f in flags){
      this.flags.push(flags[f]);
    }
  }

  modifyTo(value: string){
    this.isModified = true;
    this.newValue = value;
  }

  reset(){
    this.isModified = false;
    this.newValue = "";
  }

  getStyle() {
    if (this.flags.length > 0){
      return this.STYLE_NAME[this.flags[0]];
    }
    return "";
  }
}
