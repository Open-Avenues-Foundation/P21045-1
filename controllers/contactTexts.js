const { ContactsTexts } = require('../models')

const getAllContactTexts = async (req, res) => {
  try {
    const texts = await ContactsTexts.findAll()

    return res.status(200).send(texts)
  } catch (error) {
    return res.status(401).send(error)
  }
}

const getSpecificContactText = async (req, res) => {
  const { id } = req.params
  const text = await ContactsTexts.findByPk(id)

  return res.status(200).send(text)
}

const createContactText = async (req, res) => {
  try {
    const { contactId, textMessageId } = req.body

    if (!contactId || !textMessageId) return res.status(400).send('Please provide contactId and textMessageId')

    const newContactText = await ContactsTexts.create({
      contactId,
      textMessageId
    })

    if (!newContactText) throw new Error('Database error')

    return res.status(200).send(newContactText)
  } catch (error) {
    return res.status(500).send('Cannot create contact text')
  }
}

/*

const deleteContactText = async (request, response) => {
  try {
    const { id } = request.params

    const contactTexts = await contactTexts.findOne({ where: { id } })

    if (!contactTexts) return response.status(400).send(`Unable to find the text with id: ${id} to delete`)
    await campaign.destroy()

    return response.status(200).send('Text has been successfully deleted')
  } catch (error) {
    console.log(error)

    return response.status(501).send('Error while deleting text')
  }
}
*/

module.exports = {
  getAllContactTexts,
  getSpecificContactText,
  createContactText
}
