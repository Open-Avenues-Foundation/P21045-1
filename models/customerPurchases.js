
const customerPurchases = (connection, Sequelize, Customers, Purchases) => {
  return connection.define('customerPurchases', {
    customerId: { type: Sequelize.INTEGER, primayKey: true, reference: { model: Customers, key: 'id' } },
    purchasesId: { type: Sequelize.INTEGER, primayKey: true, reference: { model: Purchases, key: 'id' } },
  })
}

module.exports = customerPurchases
