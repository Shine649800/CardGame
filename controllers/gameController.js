const {Deck, Card, Enemy, EnemyCards, Stage, StageEnemies} = require('../models');
const currentDeck = [];
const enemy = [];
const enemyCards =[];

module.exports.renderGame = async function(req,res){
    const stage = await Stage.findByPk(req.params.stageId, {
        include: ['enemy']
    }
    );
    res.render('game', {stage});
}