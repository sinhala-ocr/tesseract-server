module.exports = {
  check(doc, callback){
    const sinhala  = require('../unicode/sinhala');
    const docUtils = require('../utils/doc-utils');
    
    doc.forEach(function(word){
      // Check for modifiers in the beginning of the word
      if (word.letters[0].value in sinhala.modifiers){
        docUtils.addFlag(word.letters[0], 'GRAMMAR_LEGITIMACY_ERROR');
      }

      // Check for vowels in the middle of the word
      for (let i = 1; i < word.letters.length; ++i){
        if (word.letters[i].value in sinhala.vowels){
          docUtils.addFlag(word.letters[i], 'GRAMMAR_LEGITIMACY_ERROR');
          word['level'] = '1';
        }
      }
    });

    callback(false, doc);
  }
}