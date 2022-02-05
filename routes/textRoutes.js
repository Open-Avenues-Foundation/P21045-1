// import controller methods 
const express = require('express')
const {
  getAllTexts, getSpecificTexts, saveText, deleteText, sendText
} = require('../controllers/textMessages')

const app = express()

// Text routes
app.get('/', getAllTexts)
app.get('/getText/:id', getSpecificTexts)
app.post('/', saveText) // adding and saving text are combined, pass the body the information from the text message
app.delete('/', deleteText)


app.get('/:id', sendText)
// When function is called, the text message already exists in the db 
// process: get the text message from the db using text.findBy(id: 1)
// use Twilio to send the text message

// needs to:
// A: Accept contact id and message string
// B: Then find that contact id’s phone number
// C: Send the phone number the message string with Twilio API
// D: Save Twilio’s response in the Database as a new textMessage

