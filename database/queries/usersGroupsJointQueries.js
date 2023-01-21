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

module.exports = {
  insertIntoJointTable,
};
