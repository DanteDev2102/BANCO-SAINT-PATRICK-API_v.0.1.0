const { hash } = require('bcryptjs');
const { register, login } = require('./store');
const localStrategy = require('passport-local').Strategy;
const passport = require('passport');

const registerUser = (dataNewUser) => {
	return new Promise((resolve, reject) => {
		const { username, password, name, lastname } = dataNewUser;
		if (!username || !password || !name || !lastname) {
			reject('incomplete data');
			return false;
		}
		hash(password, 10, (error, passwordHashed) => {
			if (error) {
				console.error(error);
				return false;
			}
			dataNewUser.password = passwordHashed;
			resolve(register(dataNewUser));
		});
	});
};

const loginUser = (dataUser) => {
	return new Promise((resolve, reject) => {
		const { username, password } = dataUser;
		if (!username || !password) {
			reject('incomplete data');
			return false;
		}
		const strategy = new localStrategy(
			(username, password, done) => {
				login(username, password, done);
			}
		);
		passport.use(resolve(strategy));
	});
};

module.exports = { registerUser, loginUser };
