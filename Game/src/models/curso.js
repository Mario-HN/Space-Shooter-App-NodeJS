'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Area);
    }
  }
  Curso.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    areaId: DataTypes.INTEGER,
    sigla: DataTypes.STRING,
    descricao: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};