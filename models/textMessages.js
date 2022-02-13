const TextMessages = (connection, Sequelize) => connection.define('messages', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  message: { type: Sequelize.STRING },
  messageStatus: { type: Sequelize.DataTypes.ENUM('draft', 'failed', 'sent'), defaultValue: 'draft' },
}, { paranoid: true })

module.exports = TextMessages
