const models = require('../models')
const Contacts = require('../models/contacts')
const ContactsTexts = require('../modesls/contactTexts')
const ContactsTextMessages = require('.../models/textMessages')

const getAllContactTexts = async(req, res) => {
  try {
    const texts = await ContactsTexts.findAll() 
    return res.status(200).send(text) 
  } catch(error) {
    return res.status(401).send(error)
  }
}

const getSpecificContactText = async(req, res) => {
  const { id } = req.params
  const text = await ConctactsTextMessages.findByPK(id) 
  return res.status(200).send(text)
}

const saveContactText = async (request, response) => {
  
  
}

const deleteContactText = async (request, response) => {
  try {
    const { id } = request.params

    const contactsText = await ContactsTexts.findOne({ where: { id } })

    if (!contactsText) return response.status(400).send(`Unable to find the text with id: ${id} to delete`)
    await campaign.destroy()

    return response.status(200).send('Text has been successfully deleted')
  } catch (error) {
    console.log(error)

    return response.status(501).send('Error while deleting text')
  }
}


// TBD where it is going to live
const sendContactText = async (req, res) => {
  const { id } = req.params 
  const records = ContactsTexts.findAll({ where: { text_message_id: id } })
  records.forEach(async(record) => {
    const { contact_id, text_message_id, sent_date } = record
    const contact = await Contacts.findByPk(contact_id) 
    const textMessage = await TextMessage.findByPk(text_message_id) 
    const sentMessage = await client.messages
      .create({
          body: textMessage.message,
          from: '+17126256545',
          to: contact.phoneNumber
        })

     // UPDATE the record ContactsText with the new sent date.
      await ContactsTexts.update(
        { sent_date: Date.now() },
        { where: { contact_id: contact.id, text_message_id: textMessage.id } }
       )
    }) 
}

module.exports = {
getAllContactTexts,
getSpecificContactText,
saveContactText,
deleteContactText,
sendContactText
}