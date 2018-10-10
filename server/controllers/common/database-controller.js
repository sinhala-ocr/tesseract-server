module.exports = {
  // Get database connection
  getConnection(){
    var mysql = require('mysql');
    var config = require('config');
  
    var dbConfig = config.get('server.database');
    var con = mysql.createConnection(dbConfig);
  
    return con;
  },

  executeQuery(query, callback){
    var mysql = require('mysql');
    var config = require('config');
  
    var dbConfig = config.get('server.database');
    var con = mysql.createConnection(dbConfig);

    con.connect(function(err){
      if (err) throw err;
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        callback(false, result);
      });
    });
  }
}