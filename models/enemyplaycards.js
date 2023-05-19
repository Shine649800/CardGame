'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnemyPlayCards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnemyPlayCards.init({
    card_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    enemy_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'EnemyPlayCards',
    timestamps: false,
    tableName: 'tcg_enemy_play_cards'
  });
  return EnemyPlayCards;
};