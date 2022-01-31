const passport = require('passport');
const configAuth = {
	failureRedirect: '/login',
	failureMessage: 'username or password problem'
};
export const login = passport.authenticate('local', configAuth);
