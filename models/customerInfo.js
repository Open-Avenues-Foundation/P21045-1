const customers = (connection, Sequelize) => connection.define('customerTables', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  zipCode: { type: Sequelize.INTEGER },
  phoneNumber: { type: Sequelize.INTEGER },
  company: { type: Sequelize.STRING }
}, { paranoid: true })

const purchases = (connection, Sequelize) => connection.define('purchasesTables', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  itemType: { type: Sequelize.STRING },
  itemName: { type: Sequelize.STRING },
  itemQuantity: { type: Sequelize.INTEGER },
  itemPrice: { type: Sequelize.DECIMAL },
  incentivizedItem: { type: Sequelize.INTEGER },
  incentivizedType: { type: Sequelize.ENUM }
}, { paranoid: true })

module.exports = {
  customers,
  purchases
}
