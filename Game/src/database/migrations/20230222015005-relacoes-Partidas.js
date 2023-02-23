'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  //   await queryInterface.addConstraint('Partidas', {
  //     type: 'foreign key',
  //     fields: ['id'],
  //     name: 'curso_area_fk',
  //     references: {
  //       table: 'Areas',
  //       field: 'id'
  //     },
  //     onDelete: 'restrict',
  //     onUpdate: 'restrict'
  //   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
