const express = require('express')
const {
  getAllContacts,
  getSpecificContacts,
  saveContact,
  deleteContact,
  updateContact
} = require('../controllers/contacts')

const router = express.Router()

router.get('/', getAllContacts)
router.get('/:id', getSpecificContacts)
router.post('/', saveContact)
router.delete('/:id', deleteContact)
router.patch('/:id', updateContact)

module.exports = router

