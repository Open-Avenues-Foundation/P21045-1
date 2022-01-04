const Sequelize = require('sequelize')
const customerModel = require('./customerInfo')

const connection = new Sequelize('customerdb', 'customers', 'customersPassword', {
  host: 'localhost', dialect: 'mysql'
})

const customer = customerModel(connection, Sequelize)

module.exports = { customer }
