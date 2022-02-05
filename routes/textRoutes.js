//Text routes
app.get('/', getAllTexts)
app.get('/', getSpecificTexts)
app.get('/', saveText)
app.get('/', getDeleteTexts)
app.get('/', addText) // post

app.get('/', sendText)
// needs to:
// A: Accept contact id and message string
// B: Then find that contact id’s phone number
// C: Send the phone number the message string with Twilio API
// D: Save Twilio’s response in the Database as a new textMessage

