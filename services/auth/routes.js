const routes = require('express').Router();
const passport = require('passport');

routes.post('/login', (req, res, next) => {
	passport.authenticate(
		'local',
		{
			successRedirect: '/',
			failureRedirect: '/login'
		},
		(error, user, info) => {
			res.json({ message: 'Successfully Authenticated', user });
		}
	)(req, res, next);
});

routes.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/auth/login');
});

module.exports = routes;
