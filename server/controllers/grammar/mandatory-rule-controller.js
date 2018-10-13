module.exports = {
  // Apply mandatory rules to the text
  applyMandatoryRules(text, callback){
    var database = require('../common/database-controller');
    database.executeQuery("SELECT * FROM mandatory_rule", function(err, result){
      if (err) throw err;

      // Apply changes by rules
      var rules = {};
      result.forEach(function(rule){
        text = text.replace(rule['find'], rule['replace'])
      });

      callback(false, text);
    });
  }



}
