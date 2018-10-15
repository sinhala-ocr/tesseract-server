module.exports = {
  // Check for each word with the dictionary
  check(doc, callback) {
    const dictionary = require('../dictionary/dictionary-controller');
    const docUtils   = require('../utils/doc-utils');

    dictionary.getAllWords(function (err, result){
      doc.forEach(function(word){
        if (result.indexOf(word.value) == -1){
          docUtils.setError(word, "NOT_IN_DICTIONARY_ERROR");
        }
      })
      callback(false, doc);
    })
  }
}