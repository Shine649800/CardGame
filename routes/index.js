var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createUser', userController.renderUserCreationForm);
router.post('/createUser', userController.createUser);

router.get('/login', userController.renderLogin);
router.post('/login', userController.login);

router.get('/logout', userController.logout);
module.exports = router;