const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1flv692mnmI!',
  database: 'db',
});

module.exports = dbConnection;
