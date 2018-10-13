module.exports = {
  // Check in extended blocks
  check(doc, callback){
    const database = require('../../common/database-controller');
    database.executeQuery("SELECT * FROM exblock", function(err, result){
      if (err) throw err;

      // Load exblock
      var exblock = result.map(function(x){
        return(x.block);
      })
      
      // Checking
      doc.forEach(function(word){
        for (let i = 0; i < word.letters.length; ++i){
          if (exblock.indexOf(word.letters[i].value) == -1){
            word.letters[i]['exblock-error'] = true;
          }
        }
      })

      callback(false, doc);
    });
  }
}