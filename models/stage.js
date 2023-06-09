'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stage.belongsToMany(models.Enemy, {
        through: 'StageEnemies',
        as: 'enemy',
        foreignKey: 'stage_id',
        otherKey: 'enemy_id'
      });
    }
  }
  Stage.init({
    stage_name: DataTypes.STRING,
    multiplier: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stage',
    timestamps: false,
    tableName: 'tcg_stages'
  });
  return Stage;
};