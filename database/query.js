const dbConnection = require('./db');

const insertIntoReports = (req, res) => {
  const data = req.body;

  const userReporting = data.username;
  const { dateCreated } = data;
  const statusOfReport = data.reportStatus;

  const insertionQuery = `INSERT INTO reports VALUES ("${userReporting}",
   "${dateCreated}", "${statusOfReport}", "${dateCreated}")`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from createNewReportInDatabase');
      res.status(404).send();
    } else {
      dbConnection.query(insertionQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          res.status(404).send();
        } else {
          res.status(201).send(result);
        }
      });
    }
  });
};

const insertIntoUsers = (req, res) => {
  const data = req.body;

  const { phoneNumber } = data;

  let columns = '(phone_number';

  if (data.firstName) {
    columns +=
  }

  const insertionQuery = `INSERT INTO users VALUES ("${userReporting}",
   "${dateCreated}", "${statusOfReport}", "${dateCreated}")`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from createNewReportInDatabase');
      res.status(404).send();
    } else {
      dbConnection.query(insertionQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          res.status(404).send();
        } else {
          res.status(201).send(result);
        }
      });
    }
  });
};

module.exports = insertIntoReports;
