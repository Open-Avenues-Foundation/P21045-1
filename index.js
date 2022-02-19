/* eslint-disable no-console */
const express = require('express')
const app = express()
const contactRoutes = require('./routes/contactRoutes')
const contactTextRoutes = require('./routes/contactTextRoutes')
const textMessageRoutes = require('./routes/textMessageRoutes')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/api/contact', contactRoutes)
app.use('/api/contactText', contactTextRoutes)
app.use('/api/text', textMessageRoutes)

app.all('*', (request, response) => {
  response.sendStatus(404)
})

app.listen(1378, () => {
  console.log('Listening on port 1378...')
})
