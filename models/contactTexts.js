const ContactTexts = (connection, Sequelize, TextMessages, Contacts) => {
  return connection.define('contactTexts', {
    contactId: { type: Sequelize.INTEGER, primayKey: true, reference: { model: Contacts, key: 'id' } },
    textMessageId: { type: Sequelize.INTEGER, primayKey: true, reference: { model: TextMessages, key: 'id' } },
    sentDate: { type: Sequelize.DATETIME }
  }, { paranoid: true })
}

module.exports = ContactTexts
