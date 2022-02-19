const Sequelize = require('sequelize')
const ContactsModel = require('./contacts')
const ContactTextsModel = require('./contactTexts')
const TextMessagesModel = require('./textMessages')

const allConfigs = require('../configs/sequelize')
const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Contacts = ContactsModel(connection, Sequelize)
const TextMessages = TextMessagesModel(connection, Sequelize)
const ContactTexts = ContactTextsModel(connection, Sequelize, TextMessages, Contacts)


Contacts.belongsToMany(TextMessages, { through: ContactTexts })
TextMessages.belongsToMany(Contacts, { through: ContactTexts })

module.exports = {
  Contacts,
  ContactTexts,
  TextMessages,
  Op: Sequelize.Op
}
