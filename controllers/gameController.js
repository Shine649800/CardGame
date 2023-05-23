const {Deck, Card, Enemy, EnemyCards, Stage} = require('../models');

module.exports.renderGame = async function(req,res){
    const stage = await Stage.findByPk(req.params.stageId, {
        include: {
            model: Enemy,
            as: 'enemy',
        }
        }
    );
    let currentDeck = [];
    let enemyCards =[];
    await EnemyCards.findByPk(req.params.enemyId);
    enemyCards.push(EnemyCards);
    res.render('game', {stage, enemyCards});
}