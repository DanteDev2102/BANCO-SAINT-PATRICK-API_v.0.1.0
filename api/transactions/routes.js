const route = require('express').Router();
const { transaction } = require('./controller');
const { success, error } = require('../../network/response');

route.put('/', async (req, res) => {
	const dataOperation = req.body;
	try {
		const operation = await transaction(dataOperation);
		success(req, res, 201, operation);
	} catch (err) {
		error(req, res, err, 500);
	}
});

module.exports = route;
