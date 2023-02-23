'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Cursos', {
      type: 'foreign key',
      fields: ['areaId'],
      name: 'curso_area_fk',
      references: {
        table: 'Areas',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Cursos', 'foreign key')
  }
};
