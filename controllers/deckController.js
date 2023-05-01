const {Deck} = require('../models');

module.exports.displayDeck = async function(req,res){
    const deck = await Deck.findByPk(req.params.deckId
    );
    res.render('decks/view', {deck});
};

module.exports.displayAllDecks = async function(req, res){
    const decks = await Deck.findAll();
    res.render('decks/viewAll', {decks});
};