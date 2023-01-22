// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const sendingNumber = process.env.TWILIO_PHONE_NUMBER;

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = require('../config');

const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const sendingNumber = TWILIO_PHONE_NUMBER;

const client = require("twilio")(accountSid, authToken);

const sendMessage = (phoneNumber, messageToSend, callback) => {
  // console.log({ phoneNumber });
  // console.log({ accountSid });
  // console.log({ authToken });
  // console.log({ sendingNumber });
  client.messages
    .create({ body: messageToSend, from: sendingNumber, to: phoneNumber })
    .then((message) => {
      console.log(message.sid);
      callback(false, message);
    })
    .catch((error) => {
      callback(error);
    });
};

const sendAlertToGroup = (phoneNumbers, messageToSend) => {
  phoneNumbers.forEach((phoneNumber) => sendMessage(phoneNumber, messageToSend));
};

module.exports = {
  sendAlertToGroup,
  sendMessage,
};
