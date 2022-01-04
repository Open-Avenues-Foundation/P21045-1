const express = require('express')
const {
  getAllCustomerInfo, getCustomerByFirstAndLastName, getCustomerByEmail, getCustomerByCompany, getCustomerByPastBuys
} = require('./controllers/customerInfo')
const app = express()

app.get('/customersInfo', getAllCustomerInfo)

app.get('/customers/:name', getCustomerByFirstAndLastName)

app.get('/customer/:email', getCustomerByEmail)

app.get('/customer/:company', getCustomerByCompany)

app.get('/customer/:pastBuys', getCustomerByPastBuys)

app.listen(1365, () => {
  // eslint-disable-next-line no-console
  console.log('listening On Port 1365...')
})
