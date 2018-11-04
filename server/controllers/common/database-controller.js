module.exports = {
  /**
   * Get database connection
   * @returns {Connection}
   */
  getConnection() {
    const mysql  = require('mysql');
    const config = require('config');

    const dbConfig   = config.get('server.database');
    const connection = mysql.createConnection(dbConfig);

    return connection;
  },

  /**
   * Execute an SQL query and return result
   * @param query
   * @param callback
   */
  executeQuery(query, callback) {
    const mysql  = require('mysql');
    const config = require('config');

    const dbConfig = config.get('server.database');
    const con      = mysql.createConnection(dbConfig);

    con.connect(function (err) {
      if (err) throw err;
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        callback(false, result);
      });
    });
  }
};
