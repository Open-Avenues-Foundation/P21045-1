const { now } = require('lodash')
const models = require('../models')
const Contacts = require('../models/contacts')
const client = require('./send_sms')
const TextMessages = require('../models/textMessages')

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

    const message = await models.TextMessages.findByPK(id)

    return message
      ? response.send(400)
      : response.sendStateu(400)
  } catch (error) {
    return response.status(400).send(error)
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

    const deleteText = await models.TextMessages.findByPK(id)
    //.destroy

   //return response.status(201)

}

const sendText = async (request, response ) => {

const {id} = request. params

//find all the text messages in the linking table with the id 
const records = await models.ContactTexts.findAll({
    where: //contact id, text message id, sendDate: null
})
//iterate over each contact and message id 
        //for loop to:
            //find cuomster with the id 
            //find test messsage with id from request.params
            //Goal: send text message from twilio 
    records.forEach((record) => {
        //const {contact id, text message id, sendDate: null} = record
        const contact = models.Contacts.findByPK(Contacts.id)
       
        //getting the message from TextMessages Model
        const textMessage = models.TextMessages.findByPK(textMessage.id)

        // need twilio to send the text message 
       const sentMessage = await client.messages 
            .create({
                body: TextMessages.message, //text message  living in textMessage
                from: '+17126256545',
                to: Contacts.phoneNumber  //the phone number living in contacts
            })
           //updatae the record ContactsText wit hthe new sentData
           await models.ContactTexts.update({
               sentDate: DATE.now()},
               { where: {
                   contactsId: id,
                   textMessagedId: id}
                 })
})
}
module.exports = {
  getAllTexts,
  getSpecificTexts,
  saveText,
  deleteText,
  sendText
}
