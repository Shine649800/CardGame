const {User, Role} = require('../models');
const md5 = require('md5');
const passport = require('passport');

module.exports.renderUserCreationForm = async function(req, res){
    const roles = await Role.findAll();
    console.log(roles);
    res.render('users/createUser', {roles});
}

module.exports.createUser = async function(req, res){
    await User.create({
        user_name: req.body.user_name,
        email:req.body.email,
        password: md5(req.body.password),
        role_id: req.body.role
    });
    res.redirect('/login')
}

module.exports.renderLogin = function(req, res){
    res.render('users/login');
}

module.exports.login = passport.authenticate('local', {
    successRedirect: '/deck',
    failureRedirect: '/login',
    failureMessage: true
});

module.exports.logout = function(req,res){
    req.logout();
    res.redirect('/login');
}