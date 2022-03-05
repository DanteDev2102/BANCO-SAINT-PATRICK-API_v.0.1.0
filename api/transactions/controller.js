const { deposit } = require('./store');

const transaction = (dataOperation) => {
	return new Promise((resolve, reject) => {
		const { origin, destiny, amount, pin } = dataOperation;
		if (!origin || !destiny || !amount || !pin) {
			reject('insufficient data');
			return false;
		}
		if (amount < 0) {
			reject('invalid amount');
			return false;
		}
		resolve(deposit(dataOperation));
	});
};

module.exports = { transaction };
