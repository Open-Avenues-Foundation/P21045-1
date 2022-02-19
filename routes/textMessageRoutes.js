const express = require('express')
const {
  getAllTexts,
  getSpecificTexts,
  saveText
 // deleteText,
// sendText
} = require('../controllers/textMessages')

const router = express.Router()

router.get('/', getAllTexts)
router.get('/:id', getSpecificTexts)
router.post('/', saveText)
//router.delete('/:id', deleteText)
//router.get('/:id', sendText)

module.exports = router
