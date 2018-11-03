module.exports = {
  // Apply optional rules to the text
  check(text, callback){
    const database = require('../../common/database-controller');
    database.executeQuery("SELECT * FROM optional_rule", function(err, result){
      if (err) throw err;

      // Apply changes by rules
      result.forEach(function(rule){
        // TODO: Check with dictionary
        text = text.replace(rule['key'], rule['value'])
      });

      callback(false, text);
    });
  }
}