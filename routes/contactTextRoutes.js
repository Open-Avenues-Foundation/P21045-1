const express = require('express')
const app = express()

const { 
    getAllContactTexts,
    getSpecificContactText,
    saveContactText,
    deleteContactText,
    sendContactText } = require('../controllers/contactTexts')

app.get('/', getAllContactTexts)
app.get('/:id', getSpecificContactText)
app.post('/', saveContactText)
app.delete('/:id', deleteContactText)
app.patch('/:id', sendContactText)

module.exports = app
