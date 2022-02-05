//Contact Routes
const express = require('express')
const app = express()

app.get('/', getAllContacts)
app.get('/getContact/:id', getSpecificContacts)
app.post('/', saveContact)
app.delete('/', deleteContact)
app.patch('/', updateContact)

//app.get('/', uploadCSV)
//Needs to:
//A: Accepts CSV file in a post route,
//B: Parse CSV file and finds all the contacts in the file and corrects any data issues
  //(e.g: special characters in an email address, unformatted phone numbers)
//C: Save them in the Database