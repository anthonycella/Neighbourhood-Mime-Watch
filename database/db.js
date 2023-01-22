const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  host: '18.206.254.187',
  user: 'root',
  password: 'root',
  database: 'db',
});

module.exports = dbConnection;
