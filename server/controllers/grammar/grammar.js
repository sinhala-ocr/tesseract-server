module.exports = {
  // Start grammar check
  check(text, callback) {
    const textUtils         = require('./utils/text-utils');
    
    const mandatoryChecker  = require('./checkers/mandatory-checker');
    const dictionaryChecker = require('./checkers/dictionary-checker');
    const exblockChecker    = require('./checkers/exblock-checker');
    const legitimacyChecker = require('./checkers/legitimacy-checker');
  
    // Mandatory check
    mandatoryChecker.check(text, function (err, result){
      var doc = textUtils.generateDocumentObject(result);
      // Dictionary check
      dictionaryChecker.check(doc, function (err, result){
        // Exblock check
        exblockChecker.check(doc, function (err, result){
          // Legitimacy check
          legitimacyChecker.check(doc, function (err, result){
            callback(null, result);
          })
        })
      })
    });

  }
}