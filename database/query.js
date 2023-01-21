const dbConnection = require('./db');

const insertIntoReports = (req, res) => {
  const data = req.body;

  const userReporting = data.username;
  const { dateCreated } = data;
  const statusOfReport = data.reportStatus;

  const insertionQuery = `INSERT INTO reports VALUES (${userReporting},
   ${dateCreated}, ${statusOfReport}, ${dateCreated})`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from insertIntoReports');
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
          res.status(404).send();
        } else {
          res.status(201).send(result);
        }
      });
    }
  });
};

module.exports = {
  insertIntoReports,
  insertIntoUsers,
};
