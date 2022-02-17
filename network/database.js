const Sequelize = require('sequelize');
const { dbName, userDb, userPassword } = require('./config');
const UserModel = require('../api/users/model');
const CardModel = require('../api/cards/model');

const sequelize = new Sequelize(dbName, userDb, userPassword, {
	host: 'localhost',
	dialect: 'mysql'
});

const connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connected to DB');
	} catch (error) {
		console.log(
			'Unable to connect to database: ' + error.message
		);
		process.exit(1);
	}
};

const User = UserModel(sequelize, Sequelize);
const Card = CardModel(sequelize, Sequelize);

sequelize
	.sync({ force: true })
	.then(() => console.log('tables sync...'));

module.exports = { connectDB, User, Card };
