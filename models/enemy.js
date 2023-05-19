'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enemy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enemy.belongsToMany(models.EnemyCards, {
        through: 'enemyplaycards',
        as: 'enemycards',
        foreignKey: 'enemy_id',
        otherKey: 'card_id'
      });
      Enemy.belongsToMany(models.Stage, {
        through: 'StageEnemies',
        as: 'stage',
        foreignKey: 'enemy_id',
        otherKey: 'stage_id'
      });
    }
  }
  Enemy.init({
    enemy_name: DataTypes.STRING,
    health_points: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enemy',
    timestamps: false,
    tableName: 'tcg_enemies'
  });
  return Enemy;
};