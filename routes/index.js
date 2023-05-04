var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const cardController = require('../controllers/cardController');
const deckController = require('../controllers/deckController');

function redirectGuests(req,res,next){
  if (!req.user){
    res.redirect('/login');
  } else {
    next();
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
});

router.get('/card/add', redirectGuests, cardController.renderAddForm);
router.post('/card/add', cardController.addCard);

router.get('/card/:cardId', redirectGuests, cardController.displayCard);
router.get('/card', redirectGuests, cardController.displayAll);

router.get('/card/:cardId/edit', redirectGuests, cardController.renderEditForm);
router.post('/card/:cardId/edit', redirectGuests, cardController.updateCard);
router.get('/card/:cardId/delete', redirectGuests, cardController.deleteCard);

router.get('/deck/:deckId', redirectGuests, deckController.displayDeck);
router.get('/deck', redirectGuests, deckController.displayAllDecks);

router.get('/createUser', userController.renderUserCreationForm);
router.post('/createUser', userController.createUser);

router.get('/login', userController.renderLogin);
router.post('/login', userController.login);

router.get('/logout', userController.logout);
module.exports = router;