var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/error', function(req, res, next){
	res.render('error');
});
router.get('/auth', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/callback', passport.authenticate('google', {failureRedirect: '/error'}), 
	function(req, res){
		var id = req.user.google.email;
		if(req.user.password == undefined)
			var password = 'default';
		else
			var password = req.user.password;
		var plainText = '?username=' + id +'&'+ 'password='+password;
		var msg = encodeURIComponent('username=' + id +'&'+ 'password='+password);
		console.log(decodeURIComponent(msg));
		req.session.destroy();
		//res.redirect('https://www.google.com/'+plainText);
		res.redirect('https://www.google.com/');
	});

module.exports = router;
