const allConfigs = require('../configs/sequelize')
const environment = process.env.NODE_ENV || 'twilio'
const config = allConfigs[environment]

const accountSid = config.accountSid
const authToken = config.authToken

const client = require('twilio')(accountSid, authToken)

module.export = client
