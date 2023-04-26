const {Card} = require('../models');

module.exports.renderAddForm = function(req,res){
    const card = {
        card_name: '',
        type: '',
        output_min: 0,
        output_max: 0,
        dices: 0,
        die_min: 0,
        die_max: 0
    };
    res.render('cards/add', {card});
};

module.exports.addCard = async function(req,res){
    const card = await Card.create({
        card_name: req.body.card_name,
        type: req.body.type,
        output_min: req.body.output_min,
        output_max: req.body.output_max,
        dices: req.body.dices,
        die_min: req.body.die_min,
        die_max: req.body.die_max
    });
    res.redirect('/')
}

module.exports.displayCard = async function(req,res){
    const card = await Card.findByPk(req.params.cardId
    );
    res.render('cards/view', {card});
};