/* eslint-disable no-console */
const express = require('express')

const app = express()

// import text message routes
const textRoutes = require('./routes/textRoutes')

// import contact routes
const contactRoutes = require('./routes/contactRoutes')


// refactor contactRoutes


app.all('*', (request, response) => {
  response.sendStatus(404)
})

app.listen(1377, () => {
  console.log('Listening on port 1377...')
})
