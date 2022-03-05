const { hash } = require('bcryptjs');
const { register } = require('./store');

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

module.exports = { registerUser };
