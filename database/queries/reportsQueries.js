const dbConnection = require('../db');

const insertIntoReports = (req, res) => {
  const data = req.body;
  // console.log(data);

  const userReporting = data.username;
  const dateCreated = new Date();
  const { reportStatus, contentCreated, groupId } = data;

  const insertionQuery = `INSERT INTO reports (user_reporting, date_created, report_status, last_updated, content, group_id) VALUES ("${userReporting}", "${dateCreated}", "${reportStatus}", "${dateCreated}", "${contentCreated}", "${groupId});`;

  // console.log(insertionQuery);

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from insertIntoReports');
      res.status(404).send();
    } else {
      dbConnection.query(insertionQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: insertIntoReports');
          console.log(errorInQuery);
          res.status(404).send();
        } else {
          console.log('Success! Entry created in reports table');
          res.status(201).send(result);
        }
      });
    }
  });
};

const updateReportStatus = (req, res) => {
  const data = req.body;

  const timestamp = new Date();

  const { reportStatus } = data;
  const { reportId } = data;

  const updateQuery = `UPDATE reports SET report_status = "${reportStatus}", last_updated = "${timestamp}" WHERE id=${reportId}`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from updateReportStatus');
      res.status(404).send();
    } else {
      dbConnection.query(updateQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: updateReportStatus');
          console.log(errorInQuery);
          res.status(404).send();
        } else {
          console.log(`Success! report with id ${reportId} successfully updated to ${reportStatus}`);
          res.status(200).send(result);
        }
      });
    }
  });
};

const getReportsFromGroupId = (req, res) => {
  const data = req.query;

  const timestamp = new Date();

  const { groupId } = data;

  const retrievalQuery = `SELECT * FROM reports WHERE group_id = ${groupId}`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from getReportsFromGroupId');
      console.log(error);
      res.status(404).send();
    } else {
      dbConnection.query(retrievalQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: getReportsFromGroupId');
          console.log(errorInQuery);
          res.status(404).send();
        } else {
          console.log(`Success! all reports retrieved from group ${groupId}`);
          res.status(200).send(result);
        }
      });
    }
  });
};

module.exports = {
  insertIntoReports,
  updateReportStatus,
  getReportsFromGroupId,
};
