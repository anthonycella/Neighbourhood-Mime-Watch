const dbConnection = require('../db');

const insertIntoJointTable = (req, res, callback) => {
  const data = req.body;
  const { phoneNumber, groupId } = data;

  const insertionQuery = `INSERT INTO users_groups VALUES ("${phoneNumber}", ${groupId})`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from insertIntoJointTable');
      res.status(404).send();
    } else {
      dbConnection.query(insertionQuery, (errorInQuery, result) => {
        callback(errorInQuery, result);
      });
    }
  });
};

const getPhoneNumbersFromGroupId = (req, res) => {
  const data = req.query;
  const { groupId } = data;

  const retrievalQuery = `SELECT phone_number FROM users_groups WHERE group_id = ${groupId};`;

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

const getUsersFromGroupId = (req, res) => {
  const data = req.query;
  const { groupId } = data;

  const retrievalQuery = `SELECT * FROM users WHERE phone_number IN (SELECT phone_number FROM users_groups WHERE group_id = ${groupId})`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from getUsersFromGroupId');
      res.status(404).send();
    } else {
      dbConnection.query(retrievalQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: getUsersFromGroupId');
          console.log(errorInQuery);
          res.status(404).send();
        } else {
          console.log(`Success! All users retrieved that belong to group ${groupId}`);
          res.status(200).send(result);
        }
      });
    }
  });
};

const getGroupsFromPhoneNumber = (req, res) => {
  const data = req.query;
  const { phoneNumber } = data;

  const retrievalQuery = `SELECT * FROM neighbourhood_watch_groups WHERE group_id IN (SELECT group_id FROM users_groups WHERE phone_number = "${phoneNumber}")`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from getUsersFromGroupId');
      res.status(404).send();
    } else {
      dbConnection.query(retrievalQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: getGroupsFromPhoneNumber');
          console.log(errorInQuery);
          res.status(404).send();
        } else {
          console.log('Success! All groups retrieved from user given');
          res.status(200).send(result);
        }
      });
    }
  });
};

const insertIntoGroupTable = (req, res) => {
  const data = req.body;

  const { groupName, dateCreated } = data;

  const insertionQuery = `INSERT INTO neighbourhood_watch_groups (group_name, date_created) VALUES ("${groupName}", "${dateCreated}")`;

  dbConnection.connect((error) => {
    if (error) {
      console.log('Connection to database unsuccessful, from insertIntoGroupTable');
      res.status(404).send();
    } else {
      dbConnection.query(insertionQuery, (errorInQuery, result) => {
        if (errorInQuery) {
          console.log('error in query: insertIntoGroupTable');
          console.log(errorInQuery);
          res.status(404).send();
        } else {
          console.log('Success! Entry successfully loaded into the neighbourhood_watch_groups table');

          req.body.groupId = result.insertId;
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

module.exports = {
  insertIntoJointTable,
  getPhoneNumbersFromGroupId,
  getUsersFromGroupId,
  getGroupsFromPhoneNumber,
  insertIntoGroupTable,
};
