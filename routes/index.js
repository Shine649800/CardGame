var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const cardController = require('../controllers/cardController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/card/add', cardController.renderAddForm);
router.post('/card/add', cardController.addCard);

router.get('/card/:cardId', cardController.displayCard);

router.get('/createUser', userController.renderUserCreationForm);
router.post('/createUser', userController.createUser);

router.get('/login', userController.renderLogin);
router.post('/login', userController.login);

router.get('/logout', userController.logout);
module.exports = router;