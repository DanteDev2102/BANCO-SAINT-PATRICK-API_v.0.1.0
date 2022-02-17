const routes = require('express').Router();

const { registerCard } = require('./controller');
const { success, error } = require('../../network/response');

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

module.exports = routes;
