module.exports = {
  // Generate the model of the document
  generateDocumentObject(text, callback) {
    const ZERO_WIDTH_JOINER = '\u200D';
    const sinhala = require('../unicode/sinhala');

    // Generate words
    var doc = [];
    var words = text.replace('\n', " ").split(" ");
    words.forEach(function(w){
      doc.push({
        value: w,
        letters: []
      })
    })

    // Generate letters
    doc.forEach(function(word){
      var w = word.value;
      var start = 0;
      // For each character
      for (let i = 0; i < w.length; ++i){
        if (w.charAt(i) != ZERO_WIDTH_JOINER){ // Skip in zero width joiner
          if (i + 1 == w.length || !(w.charAt(i + 1) in sinhala.modifiers || w.charAt(i + 1) == ZERO_WIDTH_JOINER)){
            word.letters.push({
              value: w.substring(start, i + 1)
            })
            start = i + 1;
          }
        }
      }
    })

    return doc;

  }
}