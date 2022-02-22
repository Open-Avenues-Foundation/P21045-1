'use strict'

module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert('contactTexts', [{
      contactId: 1,
      textMessageId: 1,
      sentDate: 
    }, {
      contactId: 2,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 3,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 4,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 5,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 6,
      textMessageId: 2,
      sentDate: DATE.NOW()
    }, {
      contactId: 7,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 8,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 9,
      textMessageId: 2,
      sentDate: DATE.NOW()
    }, {
      contactId: 10,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 11,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 12,
      textMessageId: 2,
      sentDate: DATE.NOW()
    }, {
      contactId: 13,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 14,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 15,
      textMessageId: 2,
      sentDate: DATE.NOW()
    }, {
      contactId: 16,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 17,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 18,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 19,
      textMessageId: 2,
      sentDate: DATE.NOW()
    }, {
      contactId: 20,
      textMessageId: 2,
      sentDate: DATE.NOW()
    }, {
      contactId: 21,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 22,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 23,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 24,
      textMessageId: 2,
      sentDate: DATE.NOW()
    }, {
      contactId: 25,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 26,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 27,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 28,
      textMessageId: 2,
      sentDate: DATE.NOW()
    }, {
      contactId: 29,
      textMessageId: 2,
      sentDate: DATE.NOW()
    }, {
      contactId: 30,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 31,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 32,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 33,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 34,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 35,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 36,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 37,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 38,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 39,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 40,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 41,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 42,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }, {
      contactId: 43,
      textMessageId: 2,
      sentDate: DATE.NOW()
    }, {
      contactId: 44,
      textMessageId: 2,
      sentDate: DATE.NOW()
    }, {
      contactId: 45,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 46,
      textMessageId: 2,
      sentDate: DATE.NOW()
    }, {
      contactId: 47,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 48,
      textMessageId: 1,
      sentDate: DATE.NOW()
    }, {
      contactId: 49,
      textMessageId: 3,
      sentDate: DATE.NOW()
    }
    ])
  },

  async down(queryInterface,) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.bulkDelete('contactTexts')
  }
}
