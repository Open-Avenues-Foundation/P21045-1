module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    accountSid: process.env.TW_SID,
    authToken: process.env.TW_TOK,
    dialect: 'mysql'
  },
}
