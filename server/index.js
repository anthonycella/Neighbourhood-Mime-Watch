const express = require('express');
const path = require('path');

const reportsQueries = require('../database/queries/reportsQueries');
const usersQueries = require('../database/queries/usersQueries');
const watchGroupsQueries = require('../database/queries/watchGroupsQueries');
const usersGroupsJointQueries = require('../database/queries/usersGroupsJointQueries');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

// for connecting to the front-end
// app.use(express.static(path.join(__dirname, '../CLIENTSIDE_DIRECTORY_PATH_GOES_HERE')));

app.post('/reports', (req, res) => {
  reportsQueries.insertIntoReports(req, res);
});

app.put('/reports', (req, res) => {
  reportsQueries.updateReportStatus(req, res);
});

app.post('/users', (req, res) => {
  usersQueries.insertIntoUsers(req, res);
});

app.put('/users', (req, res) => {
  usersQueries.updateUserData(req, res);
});

app.post('/usersgroups', (req, res) => {
  usersGroupsJointQueries.insertIntoJointTable(req, res);
});

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
