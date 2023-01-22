const mysql = require('mysql2');
require('dotenv').config();

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.password,
  database: 'db',
});

module.exports = dbConnection;
