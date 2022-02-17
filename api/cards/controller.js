const { hash } = require('bcryptjs');
const { register } = require('./store');

const registerCard = (dataNewCard) => {
	return new Promise((resolve, reject) => {
		const { pin, number, balance } = dataNewUser;
		if (!pin || !number || !balance) {
			reject('incomplete data');
			return false;
		}
		hash(pin, 10, (error, pinHashed) => {
			if (error) {
				console.error(error);
				return false;
			}
			dataNewCard.pin = pinHashed;
			resolve(register(dataNewCard));
		});
	});
};

module.exports = { registerCard };
