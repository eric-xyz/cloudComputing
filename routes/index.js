var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/auth', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/callback', passport.authenticate('google', {  
  successRedirect: '/',
  failureRedirect: '/error',
}));

module.exports = router;
