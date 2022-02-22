/* eslint-disable max-len */
'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('contacts', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      phoneNumber: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      city: { type: Sequelize.STRING },
      homeState: { type: Sequelize.STRING },
      lastOrder: { type: Sequelize.DECIMAL },
      lastOrderDate: { type: Sequelize.DATE },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE, },
    })
    await queryInterface.createTable('textMessages', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      textMessage: { type: Sequelize.STRING },
      messageStatus: { type: Sequelize.ENUM('draft', 'failed', 'sent'), defaultValue: 'draft' },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE, },
    })
    await queryInterface.createTable('contactTexts', {
      contactId: { type: Sequelize.INTEGER, primayKey: true, reference: { model: 'contacts', key: 'id' } },
      textMessageId: { type: Sequelize.INTEGER, primayKey: true, reference: { model: 'textMessages', key: 'id' } },
      sentDate: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE, },
    })
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('contacts', 'textMessages', 'contactTexts')
  }
}
