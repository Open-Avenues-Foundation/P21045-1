const Contacts = (connection, Sequelize) => connection.define('contacts', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: Sequelize.STRING },
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  phoneNumber: { type: Sequelize.STRING },
  city: { type: Sequelize.STRING },
  state: { type: Sequelize.STRING },
  lastOrder: { type: Sequelize.DECIMAL },
  lastOrderDate: { type: Sequelize.DATE },
}, { paranoid: true })


module.exports = Contacts




