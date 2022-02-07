const Sequelize = require('sequelize')
const ContactsModel = require('./contacts')
// check line below
const ContactTextModel = require('./contactTexts')
const TextMessagesModel= require('./textMessages')

const allConfigs = require('../configs/sequelize')
const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Contacts = ContactsModel(connection, Sequelize)
const ContactText = ContactTextModel(connection, Sequelize, TextMessages, Contacts)
const TextMessages = TextMessagesModel(connection, Sequelize)


Contacts.belongsToMany(TextMessages, { through: ContactText })
// contactTexts here
TextMessages.belongsToMany(Contacts, { through: ContactText })

module.exports = {
  Contacts,
  ContactText,
  TextMessages,
  Op: Sequelize.Op
}
