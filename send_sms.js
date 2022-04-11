require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'lets Go 👁 🙌 🏍 ',
    to: '+17074994075', // Text this number
    from: '+14063613228', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));