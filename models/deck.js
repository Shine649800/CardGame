'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Deck.belongsToMany(models.Card, {
        through: 'deckcards',
        as: 'cards',
        foreignKey: 'deck_id',
        otherKey: 'card_id'
      })
    }
  };
  Deck.init({
    deck_name: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Deck',
    tableName: 'tcg_decks',
    timestamps:false
  });
  return Deck;
};