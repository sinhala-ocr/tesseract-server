module.exports = {
  // Apply mandatory rules to the text
  check(text, callback){
    const database = require('../../common/database-controller');
    database.executeQuery("SELECT * FROM mandatory_rule", function(err, result){
      if (err) throw err;

      // Apply changes by rules
      result.forEach(function(rule){
        text = text.replace(rule['key'], rule['value'])
      });

      callback(false, text);
    });
  }

}
