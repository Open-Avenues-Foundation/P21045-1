const accountSid = 'AC74f21682dab7647cff268dfb86184c94'
const authToken = '1ee9b054df26c197c6fe808bfb7a37c1'

const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
    body: '2 for 1 deal! Buy out shit!',
    from: '+17126256545',
    to: '+17817992641'
  })
  // eslint-disable-next-line no-console
  .then(message => console.log(message.sid))
