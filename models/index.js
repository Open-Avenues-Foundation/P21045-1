const Sequelize = require('sequelize')
const Messages = require('./textMessages')
const ContactsModel = require('./contacts')
const ContactTextModel = require('./contactText')
const allConfigs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const TextMessages = Messages(connection, Sequelize)
const Contacts = ContactsModel(connection, Sequelize)
const ContactText = ContactTextModel(connection, Sequelize, TextMessages, Contacts)

Contacts.belongsToMany(TextMessages, { through: ContactText })
TextMessages.belongsToMany(Contacts, { through: ContactText })

module.exports = {
  TextMessages,
  Contacts,
  ContactText,
  Op: Sequelize.Op
}

