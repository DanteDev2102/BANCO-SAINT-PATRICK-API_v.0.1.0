const { Card } = require('../../network/database');

const registerCard = async (newCard) => {
	const { number } = newCard;
	try {
		const isExistCard = await Card.findOne({
			where: { number }
		});
		if (isExistCard) {
			throw 'this card already exists';
		}
		const card = await Card.create(newCard);
		return card;
	} catch (error) {
		return error;
	}
};

module.exports = { register: registerCard };
