const dbConnection = require('./db');

const insertIntoReports = (req, res) => {
  const data = req.body;
  // console.log(data);

  const userReporting = data.username;
  const dateCreated = new Date();
  const { reportStatus } = data;

  const insertionQuery = `INSERT INTO reports (user_reporting, date_created, report_status, last_updated) VALUES ("${userReporting}", "${dateCreated}", "${reportStatus}", "${dateCreated}");`;

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

const insertIntoUsers = (req, res) => {
  const data = req.body;

  const { phoneNumber } = data;

  let columns = '(phone_number';
  let values = `("${phoneNumber}"`;

  if (data.firstName) {
    columns += ', first_name';
    values += `, "${data.firstName}"`;
  }

  if (data.lastName) {
    columns += ', last_name';
    values += `, "${data.lastName}"`;
  }

  if (data.username) {
    columns += ', username';
    values += `, "${data.username}"`;
  } else {
    columns += ', username';
    values += ', "anonymous"';
  }

  columns += ')';
  values += ')';

  const insertionQuery = `INSERT INTO users ${columns} VALUES ${values}`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from insertIntoUsers');
      res.status(404).send();
    } else {
      dbConnection.query(insertionQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: insertIntoUsers');
          console.log(errorInQuery);
          res.status(404).send();
        } else {
          console.log('Success! Entry created in users table');
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

const updateUserData = (req, res) => {
  const data = req.body;

  const {
    phoneNumber, firstName, lastName, username,
  } = data;

  const updateQuery = `UPDATE users SET first_name = "${firstName}", last_name = "${lastName}", username = "${username}" WHERE phone_number = "${phoneNumber}"`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from updateUserData');
      res.status(404).send();
    } else {
      dbConnection.query(updateQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: updateUserData');
          console.log(errorInQuery);
          res.status(404).send();
        } else {
          console.log('Success! User with phone number entered successfully updated');
          res.status(200).send(result);
        }
      });
    }
  });
};

module.exports = {
  insertIntoReports,
  insertIntoUsers,
  updateReportStatus,
  updateUserData,
};
