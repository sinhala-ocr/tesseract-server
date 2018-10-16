module.exports = {
  // Start grammar check
  check(text, callback) {
    const docUtils = require('./utils/doc-utils');
    
    const mandatoryChecker            = require('./checkers/mandatory-checker');
    const dictionaryChecker           = require('./checkers/dictionary-checker');
    const characterLegitimacyChecker  = require('./checkers/character-legitimacy-checker');
    const grammarLegitimacyChecker    = require('./checkers/grammar-legitimacy-checker');
  
    // If the text is empty
    if (text == ''){
      callback("Text is empty", null);
      return;
    }

    // Mandatory check
    mandatoryChecker.check(text, function (err, result){
      var doc = docUtils.generateDocumentObject(result);
      // Dictionary check
      dictionaryChecker.check(doc, function (err, result){
        // Exblock check
        characterLegitimacyChecker.check(doc, function (err, result){
          // Legitimacy check
          grammarLegitimacyChecker.check(doc, function (err, result){
            callback(null, result);
          })
        })
      })
    });

  }
}