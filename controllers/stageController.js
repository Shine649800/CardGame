const {Stage} = require('../models');

module.exports.displayAllStages = async function(req, res){
    const stages = await Stage.findAll();
    res.render('stages/viewAll', {stages});
};