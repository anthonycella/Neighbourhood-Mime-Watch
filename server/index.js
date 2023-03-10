const express = require('express');
const cors = require('cors');

const reportsQueries = require('../database/queries/reportsQueries');
const usersQueries = require('../database/queries/usersQueries');
const usersGroupsJointQueries = require('../database/queries/usersGroupsJointQueries');

const twilio = require('./twilio/twilio');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// for connecting to the front-end
// app.use(express.static(path.join(__dirname, '../CLIENTSIDE_DIRECTORY_PATH_GOES_HERE')));

app.get('/reports', (req, res) => {
  reportsQueries.getReportsFromGroupId(req, res);
});

app.get('/reports/all', (req, res) => {
  usersGroupsJointQueries.getReportsOfAllGroupsOfUser(req, res);
});

app.post('/reports', (req, res) => {
  reportsQueries.insertIntoReports(req, res);
});

app.put('/reports', (req, res) => {
  reportsQueries.updateReportStatus(req, res);
});

app.get('/users', (req, res) => {
  usersGroupsJointQueries.getUsersFromGroupId(req, res);
});

app.post('/users', (req, res) => {
  usersQueries.insertIntoUsers(req, res);
});

app.put('/users', (req, res) => {
  usersQueries.updateUserData(req, res);
});

app.get('/groups', (req, res) => {
  usersGroupsJointQueries.getGroupsFromPhoneNumber(req, res);
});

app.get('/phonenumbers', (req, res) => {
  usersGroupsJointQueries.getPhoneNumbersFromGroupId(req, res);
});

app.post('/usersgroups', (req, res) => {
  usersGroupsJointQueries.insertIntoJointTable(req, res);
});

app.post('/groups', (req, res) => {
  usersGroupsJointQueries.insertIntoGroupTable(req, res);
});

app.post('/twilio', (req, res) => {
  const data = req.body;
  console.log(data);
  const { alert } = data;

  if (data.phoneNumbers) {
    const { phoneNumbers } = data;

    phoneNumbers.forEach((phoneNumber) => {
      twilio.sendMessage(phoneNumber, alert, (error, result) => {
        if (error) {
          console.log(`Error, twilio failed to send message to ${phoneNumber}`);
          console.log(error);
          res.status(404).send();
        } else {
          console.log(`Success! Twillio successfully sent message to ${phoneNumber}`);
          res.status(200).send(result);
        }
      });
    });
  } else {
    const { phoneNumber } = data;
    twilio.sendMessage(phoneNumber, alert, (error, result) => {
      if (error) {
        console.log(`Error, twilio failed to send message to ${phoneNumber}`);
        console.log(error);
        res.status(404).send();
      } else {
        console.log(`Success! Twillio successfully sent message to ${phoneNumber}`);
        res.status(200).send(result);
      }
    });
  }
});

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
