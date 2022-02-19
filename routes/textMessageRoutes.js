const express = require('express')
const {
  getAllTexts,
  getSpecificText,
  createText,
  sendText
} = require('../controllers/textMessages')

const router = express.Router()

router.get('/', getAllTexts)
router.get('/:id', getSpecificText)
router.post('/', createText)
// router.delete('/:id', deleteText)
router.post('/:id', sendText)

module.exports = router
