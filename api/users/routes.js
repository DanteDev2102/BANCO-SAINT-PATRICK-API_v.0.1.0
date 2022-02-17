const routes = require('express').Router();

const { registerUser } = require('./controller');
const { success, error } = require('../../network/response');

// exclusive use for mocks...
routes.put('/register', async (req, res) => {
	const dataNewUser = req.body;
	try {
		const register = await registerUser(dataNewUser);
		success(req, res, 201, register);
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
