/* eslint-disable no-console */
const models = require('../models')
const allConfigs = require('../configs/sequelize')
const environment = process.env.NODE_ENV || 'twilio'
const config = allConfigs[environment]
const accountSid = config.accountSid
const authToken = config.authToken
const client = require('twilio')(TW_SID='AC74f21682dab7647cff268dfb86184c94',
TW_TOK='e79a6b11f1f2fd76d9a3c55b5fa58d42')


const getAllTexts = async (request, response) => {
  try {
    const text = await models.TextMessages.findAll()

    return response.status(200).send(text)
  }
  catch (error) {
    return response.status(400).send(error)
  }
}

const getSpecificTexts = async (request, response) => {
  try {
    const { id } = request.params
    const message = await models.TextMessages.findByPk(id)

    return message
      ? response.send(message)
      : response.sendStatus(400)
  }
  catch (error) {
    return response.status(500).send(error)
  }
}

const saveText = async (request, response) => {
  try {
    const { message } = request.body

    if (!message) {
      return response
        .status(400)
        .send('Message was not created')
    }
    const newMessage = await models.TextMessages.create({ message })

    return response.status(201).send(newMessage)
  }

  catch (error) {
    return response.status(500).send('Cannont save message')
  }
}
/* not a prioity 
const deleteText = async (request, response) => {
  const deleteText = await models.TextMessages.findByPk(id)

  return deleteText
    ? response.send(deleteText)
    : response.send(400).send('Text was not deleted')
}

const sendText = async (request, response) => {
  const { id } = request.params
  const records = models.ContactText.findAll({
    where: { contactId: id, textMessageId: id }
  })

  records.forEach(async (record) => {
    const { contactId, textMessageId, sentDate } = record
    const contact = await models.Contacts.findByPk(id)
    const textMessage = await models.TextMessages.findByPk(id)

    console.log(sentMessage)
    const sentMessage = await client.messages
      .create({
        body: textMessage.message,
        from: '+17126256545',
        to: contact.phoneNumber
      })

    await models.ContactText.update({ sentDate: Date.now() },
      { where: { contactId: id, textMessageId: id } })

    console.log(record)
  })
}
*/

module.exports = {
  getAllTexts,
  getSpecificTexts,
  saveText
}
