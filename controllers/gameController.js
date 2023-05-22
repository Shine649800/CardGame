const {Deck, Card, Enemy, EnemyCards, Stage, StageEnemies} = require('../models');
const currentDeck = [];
const currentEnemy = [];
const enemyCards =[];

module.exports.renderGame = async function(req,res){
    const stage = await Stage.findByPk(req.params.stageId, {
        include: {
            model: Enemy,
            as: 'enemy',
            // include: [
            //     {
            //         model: EnemyCards,
            //         as: 'enemycards'
            //     }
            // ]
        }
        }
    );
    res.render('game', {stage});
}