const customers = (connection, Sequelize) => connection.define('customers', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  phoneNumber: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  company: { type: Sequelize.STRING }
}, { paranoid: true })


module.exports = {
  customers
}
