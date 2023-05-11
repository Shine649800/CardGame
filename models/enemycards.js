'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnemyCards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnemyCards.init({
    card_name: DataTypes.STRING,
    output_min: DataTypes.INTEGER,
    output_max: DataTypes.INTEGER,
    dices: DataTypes.INTEGER,
    die_min: DataTypes.INTEGER,
    die_max: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EnemyCards',
    timestamps: false,
    tableName: 'tcg_enemy_cards'
  });
  return EnemyCards;
};