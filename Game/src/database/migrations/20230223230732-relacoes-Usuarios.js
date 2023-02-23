'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Cursos', {
      type: 'foreign key',
      fields: ['cursoId'],
      name: 'usuario_curso_fk',
      references: {
        table: 'Cursos',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Usuarios', 'foreign key');
  }
};
