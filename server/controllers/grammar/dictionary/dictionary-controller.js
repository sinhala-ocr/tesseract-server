module.exports = {
  // Get all words from the database
	getAllWords(callback) {
    const database = require('../../common/database-controller');

    database.executeQuery("SELECT word FROM dictionary", function(err, result){
      if (err) throw err;
      var res = result.map(function(x){
        return x.word;
      })
      callback(false, res);
    });
	},

  // Check whether a word is exists in the dictionary
  exists(word, callback){
    const database = require('../../common/database-controller');

    database.executeQuery(`SELECT COUNT(*) AS count FROM dictionary WHERE word = '${word}'`, function(err, result){
      if (err) throw err;
      callback(false, result[0].count == 1);
    })
  },

  // Add new word to the dictionary
  addWord(word, callback){
    const database = require('../../common/database-controller');

    database.executeQuery(`INSERT INTO dictionary(word) VALUES('${word}')`, function(err, result){
      if (err) throw err;
      callback(false, result);
    })
  }
}
