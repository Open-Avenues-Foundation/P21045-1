/* eslint-disable no-console */
const models = require('../models')
const configs = require('../configs/sequelize')
const { accountSid, authToken } = configs.development
const client = require('twilio')(accountSid, authToken)

const getAllTexts = async (request, response) => {
  try {
    const text = await models.TextMessages.findAll({
      include: [
        { model: models.ContactsTexts, as: 'contactTexts' }
      ]
    })

    return response.status(200).send(text)
  }
  catch (error) {
    console.log(error)

    return response.status(400).send(error)
  }
}

const getSpecificText = async (request, response) => {
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

const createText = async (request, response) => {
  try {
    const { textMessage } = request.body

    if (!textMessage) {
      return response
        .status(400)
        .send('Message was not created  -HELP URSULA?')
    }
    const newMessage = await models.TextMessages.create({ textMessage })

    return response.status(201).send(newMessage)
  }

  catch (error) {
    return response.status(500).send('Cannont save message')
  }
}

// const deleteText = async (request, response) => {
//   const deleteText = await models.TextMessages.findByPk(id)

//   return deleteText
//     ? response.send(deleteText)
//     : response.send(400).send('Text was not deleted')
// }

// TBD where it is going to live
const sendText = async (req, res) => {
  const { id } = req.params
  const records = await models.ContactsTexts.findAll({ where: { textMessageId: id } })

  console.log(records)

  records.forEach(async (record) => {
    const { contactId, textMessageId } = record
    const contact = await models.Contacts.findByPk(contactId)
    const textMessage = await models.TextMessages.findByPk(textMessageId)

    await client.messages
      .create({
        body: textMessage.textMessage,
        // from: '+17126256545',
        from: '+19036626875',
        to: contact.phoneNumber
      })

    // UPDATE the record ContactsText with the new sent date.
    await models.ContactsTexts.update({ sentDate: Date.now() }, { where: { id: record.id } })
  })

  // Update the text message status
  await models.TextMessages.update({ messageStatus: 'sent' },
    { where: { id } })

  res.status(200).send('Messages sent!')
}

module.exports = {
  getAllTexts,
  getSpecificText,
  createText,
  sendText
}
