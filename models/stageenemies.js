'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StageEnemies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StageEnemies.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    enemy_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'StageEnemies',
    timestamps: false,
    tableName: 'tcg_stage_enemies'
  });
  return StageEnemies;
};