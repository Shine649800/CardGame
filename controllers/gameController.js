const {Deck, Card, Enemy, EnemyCards} = require('../models');
const currentDeck = [];
const enemy = [];
const enemyCards =[];

module.exports.renderGame = async function(){
    const enemy = await Enemy.findByPk(req.params.enemyId,);
    res.render('enemies/view', {enemy});
}