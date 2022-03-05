const routes = require('express').Router();

const { registerCard, balanceCard } = require('./controller');
const { success, error } = require('../../network/response');

// exclusive use for mocks..
routes.put('/register', async (req, res) => {
	const dataNewCard = req.body;
	try {
		const register = await registerCard(dataNewCard);
		success(req, res, 201, register);
	} catch (err) {
		error(
			req,
			res,
			err,
			500,
			'the card could not be created correctly'
		);
	}
});

routes.get('/:numberCard', async (req, res) => {
	const { numberCard } = req.params;
	try {
		const balance = await balanceCard(numberCard);
		success(req, res, 200, balance);
	} catch (err) {
		error(req, res, err, 500);
	}
});

module.exports = routes;
