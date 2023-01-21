const dbConnection = require('./db');

const insertIntoReports = (req, res) => {
  const data = req.body;
  console.log({ data });

  const userReporting = data.username;
  const { dateCreated } = data;
  const { reportStatus } = data;

  const insertionQuery = `INSERT INTO reports VALUES (${userReporting},
   ${dateCreated}, ${reportStatus}, ${dateCreated})`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from insertIntoReports');
      res.status(404).send();
    } else {
      dbConnection.query(insertionQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: insertIntoReports');
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
  let values = `(${phoneNumber}`;

  if (data.firstName) {
    columns += ', first_name';
    values += `, ${data.firstName}`;
  }

  if (data.lastName) {
    columns += ', last_name';
    values += `, ${data.lastName}`;
  }

  if (data.username) {
    columns += ', username';
    values += `, ${data.username}`;
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
          res.status(404).send();
        } else {
          res.status(201).send(result);
        }
      });
    }
  });
};

const updateReportStatus = (req, res) => {
  const data = req.body;

  const { reportStatus } = data;
  const { reportId } = data;

  const updateQuery = `UPDATE reports SET reportStatus = ${reportStatus} WHERE id=${reportId}`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from updateReportStatus');
      res.status(404).send();
    } else {
      dbConnection.query(updateQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: updateReportStatus');
          res.status(404).send();
        } else {
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

  const updateQuery = `UPDATE users SET first_name = ${firstName}, last_name = ${lastName}, username = ${username} WHERE phone_number = ${phoneNumber}`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from updateUserData');
      res.status(404).send();
    } else {
      dbConnection.query(updateQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: updateUserData');
          res.status(404).send();
        } else {
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
