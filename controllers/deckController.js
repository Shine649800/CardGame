const {Deck, Card, DeckCards} = require('../models');

module.exports.displayDeck = async function(req,res){
    const deck = await Deck.findByPk(req.params.deckId, {
        include: ['cards']
    }
    );
    res.render('decks/view', {deck});
};

module.exports.displayAllDecks = async function(req, res){
    const decks = await Deck.findAll();
    res.render('decks/viewAll', {decks});
};

module.exports.renderAddForm = function(req,res){
    const deck = {
        deck_name: ''
    };
    res.render('decks/add', {deck});
};

module.exports.addDeck = async function(req,res){
    const deck = await Deck.create({
        deck_name: req.body.deck_name
    });
    res.redirect('/deck')
}

module.exports.renderEditForm = async function(req,res){
    const deck = await Deck.findByPk(req.params.deckId);
    res.render('decks/edit', {deck});
};

module.exports.updateDeck = async function(req, res){
    const deck = await Deck.findByPk(req.params.deckId);
    await Deck.update({
        deck_name: req.body.deck_name
    }, {
        where: {
            id: req.params.deckId
        }
    });
    res.redirect(`/deck/${req.params.deckId}`);
}

module.exports.deleteDeck = async function(req, res){
    const deck = await Deck.findByPk(req.params.deckId);
    await Deck.destroy({
        where: {
            id: req.params.deckId
        }
    });
    res.redirect('/deck')
};