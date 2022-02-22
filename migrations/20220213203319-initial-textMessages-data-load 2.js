'use strict'

module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert('textMessages', [{
      textMessage: 'Enjoy 15% off!',
      messageStatus: 'sent'
    }, {
      textMessage: 'Sorry, message error.',
      messageStatus: 'failed'
    }, {
      textMessage: 'Enjoy.... Discount!',
      messageStatus: 'draft'
    }
    ])
  },


  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.bulkDelete('textMessages')
  }
}
