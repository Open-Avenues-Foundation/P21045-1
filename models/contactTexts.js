const ContactTexts = (connection, Sequelize, TextMessages, Contacts) => {
  return connection.define('contactTexts', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    contactId: { type: Sequelize.INTEGER, reference: { model: Contacts, key: 'id' } },
    textMessageId: { type: Sequelize.INTEGER, reference: { model: TextMessages, key: 'id' } },
    sentDate: { type: Sequelize.DATE, defaultValue: null, allowNull: true }
  }, { paranoid: true })
}

module.exports = ContactTexts
