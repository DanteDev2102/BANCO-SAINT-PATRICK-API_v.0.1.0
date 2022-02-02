const routes = require('express').Router();

const { registerUser, loginUser } = require('./controller');
const { success, error } = require('../../network/response');
const __auth = require('../../middlewares/auth');

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
