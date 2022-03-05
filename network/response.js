const statusMessages = {
	200: 'done',
	201: 'created',
	400: 'invalid format',
	404: 'not found',
	500: 'internal error'
};

const success = (req, res, status = 200, message) => {
	!message && (message = statusMessages[status]);
	if (typeof message === 'string') {
		res.status(status).send({ error: message });
	} else {
		res.status(status).send({
			...message
		});
	}
};

const error = (req, res, error, status = 500, details) => {
	!details && (details = statusMessages[status]);
	console.error(`[response error] ${details}`);
	res.status(status).send({ error: { error, details } });
};

module.exports = {
	success,
	error
};
