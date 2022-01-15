/* eslint-disable no-console */
const express = require('express')
const { getAllCustomerInfo } = require('./controllers/customers')


const app = express()

app.get('/customers', getAllCustomerInfo)


app.listen(1377, () => {
  console.log('Listening on port 1377...')
})
