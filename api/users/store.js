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

module.exports = { register: registerUser };
