const express = require('express');
const path = require('path');
const query = require('../database/query');

const app = express();
const PORT = 3000;

app.use(express.json());
// for connecting to the front-end
// app.use(express.static(path.join(__dirname, '../CLIENTSIDE_DIRECTORY_PATH_GOES_HERE')));

app.post('/reports', (req, res) => {
  query.insertIntoReports(req, res);
});

app.post('/users', (req, res) => {
  query.insertIntoUsers(req, res);
});

app.put('/reports', (req, res) => {
  query.updateReportStatus(req, res);
});

app.put('/users', (req, res) => {
  query.updateUserData(req, res);
});

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
