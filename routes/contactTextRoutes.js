const express = require('express')

const {
  getAllContactTexts,
  getSpecificContactText,
  saveContactText,
  //deleteContactText,
  //sendContactText
} = require('../controllers/contactTexts')


const router = express.Router()

router.get('/', getAllContactTexts)
router.get('/:id', getSpecificContactText)
// router.post('/', saveContactText)
//router.delete('/:id', deleteContactText)
//router.patch('/:id', sendContactText)

module.exports = router
