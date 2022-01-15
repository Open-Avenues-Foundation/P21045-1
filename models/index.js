const Sequelize = require('sequelize')
const CustomerModel = require('./customers')
const PurchaseModel = require('./purchases')
const CustomerPurchasesModel = require('./customerPurchases')
const allConfigs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Customers = CustomerModel(connection, Sequelize)
const Purchases = PurchaseModel(connection, Sequelize)
const CustomerPurchases = CustomerPurchasesModel(connection, Sequelize, Customers, Purchases)

Customers.belongsToMany(Purchases)
Purchases.hasMany(Customers)

Customers.belongsToMany(Purchases, { through: CustomerPurchases })
Purchases.belongsToMany(Customers, { through: CustomerPurchases })

module.exports = {
  Customers,
  Purchases,
  CustomerPurchases,
  Op: Sequelize.Op
}
