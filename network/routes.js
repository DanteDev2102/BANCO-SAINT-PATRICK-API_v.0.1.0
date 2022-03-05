const user = require('../api/users/routes');
const auth = require('../services/auth/routes');
const card = require('../api/cards/routes');
const transaction = require('../api/transactions/routes');
const __auth = require('../middlewares/auth');

const routes = (server) => {
	server.use('/user', user);
	server.use('/auth', auth);
	server.use('/card', __auth, card);
	server.use('/transaction', __auth, transaction);
};

module.exports = routes;
