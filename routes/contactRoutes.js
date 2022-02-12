const express = require('express')
const { 
    getAllContacts, 
    getSpecificContacts, 
    saveContact, 
    deleteContact, 
    updateContact } = require('../controllers/contacts')
const app = express()

app.get('/', getAllContacts)
app.get('/:id', getSpecificContacts)
app.post('/', saveContact)
app.delete('/:id', deleteContact)
app.patch('/:id', updateContact)

module.exports = app

