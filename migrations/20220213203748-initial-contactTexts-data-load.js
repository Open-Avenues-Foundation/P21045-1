'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert('contactTexts', [{
      contactId: 1,
      textMessageId: 1
    }, {
      contactId: 2,
      textMessageId: 1
    }, {
      contactId: 3,
      textMessageId: 1
    }, {
      contactId: 4,
      textMessageId: 1
    }, {
      contactId: 5,
      textMessageId: 1
    }, {
      contactId: 6,
      textMessageId: 2
    }, {
      contactId: 7,
      textMessageId: 3
    }, {
      contactId: 8,
      textMessageId: 1
    }, {
      contactId: 9,
      textMessageId: 2
    }, {
      contactId: 10,
      textMessageId: 3
    }, {
      contactId: 11,
      textMessageId: 1
    }, {
      contactId: 12,
      textMessageId: 2
    }, {
      contactId: 13,
      textMessageId: 3
    }, {
      contactId: 14,
      textMessageId: 1
    }, {
      contactId: 15,
      textMessageId: 2
    }, {
      contactId: 16,
      textMessageId: 3
    }, {
      contactId: 17,
      textMessageId: 1
    }, {
      contactId: 18,
      textMessageId: 1
    }, {
      contactId: 19,
      textMessageId: 2
    }, {
      contactId: 20,
      textMessageId: 2
    }, {
      contactId: 21,
      textMessageId: 3
    }, {
      contactId: 22,
      textMessageId: 1
    }, {
      contactId: 23,
      textMessageId: 1
    }, {
      contactId: 24,
      textMessageId: 2
    }, {
      contactId: 25,
      textMessageId: 1
    }, {
      contactId: 26,
      textMessageId: 3
    }, {
      contactId: 27,
      textMessageId: 3
    }, {
      contactId: 28,
      textMessageId: 2
    }, {
      contactId: 29,
      textMessageId: 2
    }, {
      contactId: 30,
      textMessageId: 1
    }, {
      contactId: 31,
      textMessageId: 3
    }, {
      contactId: 32,
      textMessageId: 3
    }, {
      contactId: 33,
      textMessageId: 1
    }, {
      contactId: 34,
      textMessageId: 1
    }, {
      contactId: 35,
      textMessageId: 3
    }, {
      contactId: 36,
      textMessageId: 1
    }, {
      contactId: 37,
      textMessageId: 3
    }, {
      contactId: 38,
      textMessageId: 1
    }, {
      contactId: 39,
      textMessageId: 1,
    }, {
      contactId: 40,
      textMessageId: 3
    }, {
      contactId: 41,
      textMessageId: 1
    }, {
      contactId: 42,
      textMessageId: 3
    }, {
      contactId: 43,
      textMessageId: 2
    }, {
      contactId: 44,
      textMessageId: 2
    }, {
      contactId: 45,
      textMessageId: 1
    }, {
      contactId: 46,
      textMessageId: 2
    }, {
      contactId: 47,
      textMessageId: 1
    }, {
      contactId: 48,
      textMessageId: 1
    }, {
      contactId: 49,
      textMessageId: 3
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
