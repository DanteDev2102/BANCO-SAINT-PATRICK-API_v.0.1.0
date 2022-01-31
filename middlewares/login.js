const passport = require('passport');
const configAuth = {
	failureRedirect: '/',
	failureMessage: 'username or password problem'
};
const login = passport.authenticate('local', configAuth);
module.exports = login;
