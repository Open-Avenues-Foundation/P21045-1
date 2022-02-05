const models = require('../models')

const getAllCustomerInfo = async (request, response) => {
  const customers = await models.Customers.findAll()

  return response.send(customers)
}

module.exports = {
  getAllCustomerInfo,
}
