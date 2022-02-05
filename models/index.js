const Sequelize = require('sequelize')
const Messages = require('./textMessages')
const ContactsModel = require('./contacts')

const connection = new Sequelize('privyData', 'privy', 'Pr1vy$2', {
  host: 'localhost', dialect: 'mysql'
})

const TextMessages = Messages(connection, Sequelize)
const Contacts = ContactsModel(connection, Sequelize)

module.exports = {
  TextMessages,
  Contacts
}
