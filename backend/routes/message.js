var express = require('express');
var router = express.Router();

require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const testToken = process.env.TEST_AUTH_TOKEN;
const testSid = process.env.TEST_ACCOUNT_SID;

const client = require('twilio')(testSid, testToken);
// const client = require('twilio')(accountSid, authToken);

router.post('/', (req, res, next) => {
  client.messages
    .create(req.body.message,(err,message) => {
        if(err) return next(err)
        console.log(`Success! The SID for this SMS message is: ${message.sid}`);
        console.log(message)
        res.send(message.sid)
    })
});

module.exports = router;
