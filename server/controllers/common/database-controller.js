module.exports = {
  // Get database connection
  getConnection(){
    const mysql  = require('mysql');
    const config = require('config');
  
    const dbConfig = config.get('server.database');
    const con = mysql.createConnection(dbConfig);
  
    return con;
  },

  // Execute a sql query and return result
  executeQuery(query, callback){
    const mysql  = require('mysql');
    const config = require('config');
  
    const dbConfig = config.get('server.database');
    const con = mysql.createConnection(dbConfig);

    con.connect(function(err){
      if (err) throw err;
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        callback(false, result);
      });
    });
  }
}