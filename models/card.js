'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Card.belongsToMany(models.Deck, {
        through: 'deckcards',
        as: 'decks',
        foreignKey: 'card_id',
        otherKey: 'deck_id'
      });
    }
  };
  Card.init({
    card_name: DataTypes.STRING,
    type: DataTypes.STRING,
    output_min: DataTypes.INTEGER,
    output_max: DataTypes.INTEGER,
    dices: DataTypes.INTEGER,
    die_min: DataTypes.INTEGER,
    die_max: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
    tableName: 'tcg_cards',
    timestamps:false
  });
  return Card;
};