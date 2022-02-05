const express = require('express')
const {
  getAllContacts, getSpecificContacts, saveContact, deleteContact, updateContact
} = require('../controllers/contacts')

const app = express()

app.get('/', getAllContacts)
app.get('/getContact/:id', getSpecificContacts)
app.post('/', saveContact)
app.delete('/', deleteContact)
app.patch('/', updateContact)


// Needs to:
// A: Accepts CSV file in a post route,
// B: Parse CSV file and finds all the contacts in the file and corrects any data issues
// (e.g: special characters in an email address, unformatted phone numbers)
// C: Save them in the Database
