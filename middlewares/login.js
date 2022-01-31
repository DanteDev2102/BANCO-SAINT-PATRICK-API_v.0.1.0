const passport = require('passport');
const configAuth = {
	failureRedirect: '/login',
	failureMessage: 'username or password problem'
};
const login = passport.authenticate('local', configAuth);
module.exports = login;
