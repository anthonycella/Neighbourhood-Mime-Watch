const dbConnection = require('../db');
const { insertIntoJointTable } = require('./usersGroupsJointQueries');

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

  if (data.password) {
    columns += ', user_password';
    values += `, "${data.password}"`;
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
          insertIntoJointTable(req, res, (errorFromInput, resultFromJointQuery) => {
            if (errorFromInput) {
              console.log('error in query: insertIntoJointTable');
              console.log(errorFromInput);
              res.status(404).send();
            } else {
              console.log('Success! Entry created in joint table');
              res.status(201).send(resultFromJointQuery);
            }
          });
        }
      });
    }
  });
};

const updateUserData = (req, res) => {
  const data = req.body;

  const {
    phoneNumber, firstName, lastName, username, password,
  } = data;

  const updateQuery = `UPDATE users SET first_name = "${firstName}", last_name = "${lastName}", username = "${username}", user_password = "${password}" WHERE phone_number = "${phoneNumber}"`;

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
  insertIntoUsers,
  updateUserData,
};
