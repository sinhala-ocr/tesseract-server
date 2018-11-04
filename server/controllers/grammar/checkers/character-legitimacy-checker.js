module.exports = {
  // Check in character legitimacy rules
  check(doc, callback){
    const database = require('../../common/database-controller');
    const docUtils = require('../utils/doc-utils');

    database.executeQuery("SELECT * FROM character_legitimacy_rule", function(err, result){
      if (err) throw err;

      // Load exblock
      var characters = result.map(function(x){
        return(x.character);
      })
      
      // Checking
      doc.forEach(function(word){
        for (let i = 0; i < word.letters.length; ++i){
          if (characters.indexOf(word.letters[i].value) == -1){
            docUtils.addFlag(word.letters[i], "CHARACTER_LEGITIMACY_ERROR");
            word['level'] = '1';
          }
        }
      })

      callback(false, doc);
    });
  }
}