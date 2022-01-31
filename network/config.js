require('dotenv').config();

const config = {
	userDb: process.env.USER ?? 'root',
	userPassword: process.env.PASSWORD ?? 'r1v3n0nl1',
	portServer: process.env.PORT_SERVER ?? 3001,
	hostServer: process.env.HOST_SERVER ?? 'http://localhost',
	dbName: process.env.DATABASE ?? 'banco_saint_patrick',
	dbPort: process.env.DATABASE_PORT ?? 3306,
	sessionSecret: process.env.SESSION_SECRET ?? 'this is a secret'
};

module.exports = config;
