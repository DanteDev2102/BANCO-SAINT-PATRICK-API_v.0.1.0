const routes = require('express').Router();
const { register } = require('./controller');
const { success, error } = require('../../network/response');

routes.put('/', async (req, res) => {
	const dataNewUser = req.body;
	try {
		const register = await register(dataNewUser);
		success(req, res, 201, 'user created successfully');
	} catch (err) {
		error(
			req,
			res,
			err,
			500,
			'the user could not be created correctly'
		);
	}
});

module.exports = routes;
