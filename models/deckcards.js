'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeckCards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DeckCards.hasMany(models.Card, {
        as: 'card',
        foreignKey: 'card_id'
      });
    }
  }
  DeckCards.init({
    deck_id: {
     type: DataTypes.INTEGER,
      primaryKey: true
    },
    card_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'deckcards',
    tableName: 'tcg_deck_cards',
    timestamps: false
  });
  return DeckCards;
};