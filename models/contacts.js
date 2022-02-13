const Contacts = (connection, Sequelize) => connection.define('contacts', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  phoneNumber: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  city: { type: Sequelize.STRING },
  homeState: { type: Sequelize.STRING },
  lastOrder: { type: Sequelize.DECIMAL },
  lastOrderDate: { type: Sequelize.DATE },
}, { paranoid: true })


module.exports = Contacts

