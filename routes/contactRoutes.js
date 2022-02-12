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
