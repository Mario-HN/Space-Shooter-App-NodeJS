'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Curso);
      this.hasMany(models.Partida);
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    email: DataTypes.STRING,
    cursoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};