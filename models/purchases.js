
const purchases = (connection, Sequelize) => connection.define('purchases', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  lastOrderPrice: { type: Sequelize.DECIMAL, allowNull: false },
  lastOrderDate: { type: Sequelize.DATE, allowNull: false },
  city: { type: Sequelize.STRING },
  stateAbr: { type: Sequelize.STRING },
}, { paranoid: true })

module.exports = purchases
