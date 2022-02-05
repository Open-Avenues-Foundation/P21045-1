const models = require('../models')
const allConfigs = require('../configs/sequelize')
const environment = process.env.NODE_ENV || 'twilio'
const config = allConfigs[environment]

const accountSid = config.accountSid
const authToken = config.authToken

const client = require('twilio')(accountSid, authToken)


const getAllTexts = async (request, response) => {
  try {
    const text = await models.TextMessages.findAll()

    return response.status(200).send(text)
  } catch (error) {
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
  } catch (error) {
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
    const newMessage = await models.TextMessages.create({
      message
    })

    return response.status(201).send(newMessage)
  } catch (error) {
    return response.status(500).send('Cannont save message')
  }
}

const deleteText = async (request, response) => {
    const deleteText = await models.TextMessages.findByPk(id)
  return deleteText
   ? response.send(deleteText)
   : response.send(400).send('Text was not deleted')
}

const sendText = async (request, response) => {
  const {id} = request.params //text message id

  const records = models.ContactText.findAll({
    where: {contactId: id, textMessageId: id}},
    //records is an array with contact ID and texMessage ID
    //forEach is looping through the records array  
    records.forEach(async(record) => {
    const {contactId, textMessageId, sentDate} = record
    
    const contact = await models.Contacts.findByPk(id)
    const textMessage = await models.TextMessages.findByPk(id)
  
    console.log(sentMessage)
    const sentMessage = await client.messages
    .create({
      body: textMessage.message,
      from: '+17126256545',
      to: contact.phoneNumber
     
    })
    //Update the record ContactsText
    await models.ContactText.update(
      {sentDate: Date.now()},
      {where: { contactId: id, textMessageId: id} } )
   
    console.log(record)
   })//end of loop
}) 



module.export= {
  getAllTexts,
  getSpecificTexts,
  saveText,
  deleteText,
  sendText
}
