// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "ACab8838dc57a57564af7736ed9aed94a6";
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
