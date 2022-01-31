const { compare } = require('bcryptjs');

const { User } = require('../../network/database');

const registerUser = async (newUser) => {
	const { username } = newUser;
	try {
		const isExistUser = await User.findOne({
			where: { username }
		});
		if (isExistUser) {
			throw 'this user already exists';
		}
		const user = await User.create(newUser);
		return user;
	} catch (error) {
		return error;
	}
};

const loginUser = async (username, password, done) => {
	console.log(username);
	try {
		const user = await User.findOne({
			where: { username }
		});
		if (!isExistUser) return done(null, false);

		const isCorrectPassword = await compare(
			password,
			user.password
		);
		if (!isCorrectPassword) return done(null, false);

		return done(null, user);
	} catch (error) {
		return done(error);
	}
};

module.exports = { register: registerUser, login: loginUser };
