'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Areas', [
      {
        id: '1',
        nome: 'Ciências Exatas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        nome: 'Ciências Humanas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        nome: 'Ciências Biológicas',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};