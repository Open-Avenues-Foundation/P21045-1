const express = require('express')

const {
  getAllContactTexts,
  getSpecificContactText,
  createContactText
  // deleteContactText
} = require('../controllers/contactTexts')

const router = express.Router()

router.get('/', getAllContactTexts)
router.get('/:id', getSpecificContactText)
router.post('/', createContactText)
// router.delete('/:id', deleteContactText)

module.exports = router
