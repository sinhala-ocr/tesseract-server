module.exports = {
  // Check for each word with the dictionary
  check(doc, callback) {
    const dictionary = require('../dictionary/dictionary-controller');

    dictionary.getAllWords(function (err, result){
      doc.forEach(function(word){
        if (result.indexOf(word.value) == -1){
          word['dictionary-error'] = true;
        }
      })
      callback(false, doc);
    })
  }
}