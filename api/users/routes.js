const routes = require('express').Router();

const { registerUser, loginUser } = require('./controller');
const { success, error } = require('../../network/response');
const __login = require('../../middlewares/login');

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

routes.post('/login', __login, async (req, res) => {
	const loginData = req.body;
	try {
		const login = await loginUser(loginData);
		success(req, res, 200, login);
		res.redirect('/');
	} catch (err) {
		error(req, res, err, 500, 'failed login');
	}
});

module.exports = routes;
