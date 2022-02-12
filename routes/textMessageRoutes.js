const express = require('express')
const app = express()
const { getAllTexts,
    getSpecificTexts,
    saveText,
    deleteText,
    sendText } = require('../controllers/textMessages')

app.get('/', getAllTexts)
app.get('/:id', getSpecificTexts)
app.post('/', saveText)
app.delete('/:id', deleteText)
app.get('/:id', sendText)

modules.export = app