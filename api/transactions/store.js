const { Card, Transaction } = require('../../network/database');

const deposit = async ({ origin, destiny, amount, pin }) => {
	try {
		const isExistOrigin = await Card.findByPk(origin);
		if (!isExistOrigin) {
			throw 'source account does not exist';
		}
		const isExistDestiny = await Card.findByPk(destiny);
		if (!isExistDestiny) {
			throw 'the destination account does not exist';
		}
		const {
			dataValues: { balance: balanceOrigin, pin: validatePin }
		} = isExistOrigin;
		if (pin !== validatePin) {
			throw 'wrong pin';
		}
		if (amount > balanceOrigin) {
			throw 'insufficient balance';
		}
		const {
			dataValues: { balance: balanceDestiny }
		} = isExistDestiny;
		const newBalanceOrigin = balanceOrigin - amount;
		const newBalanceDestiny = balanceDestiny + amount;
		await Card.update(
			{ balance: newBalanceOrigin },
			{
				where: {
					number: origin
				}
			}
		);
		await Card.update(
			{ balance: newBalanceDestiny },
			{
				where: {
					number: destiny
				}
			}
		);
		const deposit = await Transaction.create({
			origin,
			destiny,
			amount
		});
		return { msg: 'succeffully transaction', deposit };
	} catch (error) {
		return error;
	}
};

module.exports = { deposit };
