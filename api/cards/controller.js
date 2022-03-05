const { hash } = require('bcryptjs');
const { register, consultingBalance } = require('./store');

const registerCard = (dataNewCard) => {
	return new Promise((resolve, reject) => {
		const { pin, number, balance } = dataNewCard;
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
			return resolve(register(dataNewCard));
		});
	});
};

const balanceCard = (numberCard) => {
	return new Promise((resolve, reject) => {
		if (!numberCard) {
			reject('not number card');
			return false;
		}
		resolve(consultingBalance(numberCard));
	});
};

module.exports = { registerCard, balanceCard };
