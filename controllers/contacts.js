/* eslint-disable max-len */
const models = require('../models')

const getAllContacts = async (request, response) => {
  try {
    const contacts = await models.Contacts.findAll()

    return response.send(contacts)
  } catch (error) {
    return response.status(400).send(error)
  }
}
const getSpecificContacts = async (request, response) => {
  try {
    const { id } = request.params

    const contact = await models.Contacts.findByPk(id)

    return contact
      ? response.send(contact)
      : response.sendStatus(400)
  } catch (error) {
    return response.status(500).send(error)
  }
}

const saveContact = async (request, response) => {
  try {
    const {
      email, firstName, lastName, phoneNUmber, city, state, lastOrder, lastOrderDate
    } =
  request.body

    if (!email || !firstName || !lastName || !phoneNUmber || !city || !state || !lastOrder || !lastOrderDate) {
      return response
        .status(400)
        .send('Contact was not created')
    }
    const newContact = await models.Contacts.create({
      email, firstName, lastName, phoneNUmber, city, state, lastOrder, lastOrderDate
    })

    return response.status(201).send(newContact)
  } catch (error) {
    return response.status(500).send('Cannont save contact')
  }
}

const deleteContact = async (request, response) => {
  const { id } = request.params

  const deletedContact = await models.Contacts.findeOne({ where: id })

  return deletedContact
    ? response.send(deletedContact)
    : response.status(400).send('Contact. was not deleted')
}

const updateContact = async (request, response) => {

}

module.exports = {
  getAllContacts,
  getSpecificContacts,
  saveContact,
  deleteContact,
  updateContact
}
