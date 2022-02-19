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
const ContactsTexts = ContactTextsModel(connection, Sequelize, TextMessages, Contacts)


Contacts.belongsToMany(TextMessages, { through: ContactsTexts })
TextMessages.belongsToMany(Contacts, { through: ContactsTexts })
Contacts.hasMany(ContactsTexts)
ContactsTexts.belongsTo(Contacts)
TextMessages.hasMany(ContactsTexts)
ContactsTexts.belongsTo(TextMessages)


module.exports = {
  Contacts,
  ContactsTexts,
  TextMessages,
  Op: Sequelize.Op
}
