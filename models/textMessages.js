const TextMessages = (connection, Sequelize) => connection.define('message', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  message: { type: Sequelize.STRING },
  status: { type: Sequelize.DataType.ENUM('draft', 'failed', 'sent'), defaultValue: 'draft' },
}, { paranoid: true })

module.exports = TextMessages


