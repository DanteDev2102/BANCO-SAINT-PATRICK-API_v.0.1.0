const express = require('express');
const user = require('../api/users/routes');
const auth = require('../services/auth/routes');

const routes = (server) => {
	server.use('/user', user);
	server.use('/auth', auth);
};

module.exports = routes;
