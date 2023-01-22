// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sendingNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require("twilio")(accountSid, authToken);

const sendMessage = (phoneNumber, messageToSend) => {
  client.messages
    .create({ body: messageToSend, from: sendingNumber, to: phoneNumber })
    .then(message => console.log(message.sid));
};

const sendAlertToGroup = (phoneNumbers, messageToSend) => {
  phoneNumbers.forEach((phoneNumber) => sendMessage(phoneNumber, messageToSend));
};

module.exports = sendAlertToGroup;
