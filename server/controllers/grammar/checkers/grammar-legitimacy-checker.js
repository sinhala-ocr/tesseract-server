module.exports = {
  check(doc, callback){
    const sinhala  = require('../unicode/sinhala');
    const docUtils = require('../utils/doc-utils');
    
    doc.forEach(function(word){
      // Check for modifiers in the beginning of the word
      if (word.letters[0].value in sinhala.modifiers){
        docUtils.setError(word.letters[0], 'MODIFIER_IN_THE_BEGIN_ERROR');
      }

      // Check for vowels in the middle of the word
      for (let i = 1; i < word.letters.length; ++i){
        if (word.letters[i].value in sinhala.vowels){
          docUtils.setError(word.letters[i], 'VOWEL_IN_THE_MIDDLE_ERROR');
        }
      }
    });

    callback(false, doc);
  }
}