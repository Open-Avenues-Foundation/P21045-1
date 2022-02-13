const TextMessages = (connection, Sequelize) => connection.define('textMessages', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  textMessage: { type: Sequelize.STRING },
  messageStatus: { type: Sequelize.DataTypes.ENUM('draft', 'failed', 'sent'), defaultValue: 'draft' },
}, { paranoid: true })

module.exports = TextMessages
