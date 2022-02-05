const express = require('express')
const {
  getAllTexts, getSpecificTexts, saveText, deleteText, sendText
} = require('../controllers/textMessages')

const app = express()

app.get('/', getAllTexts)
app.get('/getText/:id', getSpecificTexts)
app.post('/', saveText)
app.delete('/', deleteText)
app.get('/:id', sendText)
