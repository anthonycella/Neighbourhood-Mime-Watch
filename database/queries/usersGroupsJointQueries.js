const dbConnection = require('../db');

const insertIntoJointTable = (req, res) => {
  const data = req.body;
  const { phoneNumber, groupId } = data;

  const insertionQuery = `INSERT INTO users_groups VALUES ("${phoneNumber}", ${groupId})`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from insertIntoJointTable');
      res.status(404).send();
    } else {
      dbConnection.query(insertionQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: insertIntoJointTable');
          console.log(errorInQuery);
          res.status(404).send();
        } else {
          console.log('Success! Entry created in joint table');
          res.status(201).send(result);
        }
      });
    }
  });
};

const getPhoneNumbersFromGroupId = (req, res) => {
  const data = req.body;
  const { groupId } = data;

  const retrievalQuery = `SELECT * FROM users_groups WHERE group_id = ${groupId};`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from getPhoneNumbersFromGroupId');
      res.status(404).send();
    } else {
      dbConnection.query(retrievalQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: getPhoneNumbersFromGroupId');
          console.log(errorInQuery);
          res.status(404).send();
        } else {
          console.log('Success! phone numbers retrieved from joint table');
          res.status(200).send(result);
        }
      });
    }
  });
};

module.exports = {
  insertIntoJointTable,
  getPhoneNumbersFromGroupId,
};
