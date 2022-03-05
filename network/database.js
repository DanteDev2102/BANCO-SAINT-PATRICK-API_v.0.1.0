const Sequelize = require('sequelize');

const { dbName, userDb, userPassword } = require('./config');

const UserModel = require('../api/users/model');
const CardModel = require('../api/cards/model');
const TransactionModel = require('../api/transactions/model');

const sequelize = new Sequelize(dbName, userDb, userPassword, {
	host: 'localhost',
	dialect: 'mysql'
});

const connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connected to DB');
	} catch (error) {
		console.error(
			'Unable to connect to database: ' + error.message
		);
		process.exit(1);
	}
};

const User = UserModel(sequelize, Sequelize);
const Card = CardModel(sequelize, Sequelize);
const Transaction = TransactionModel(sequelize, Sequelize);

// las foreign key de deben crear aca al crear relaciones
// en lugar de hacerlo desde los modelos
// de otra forma toca modificar los modelos

sequelize
	.sync({ force: false })
	.then(() => console.log('tables sync....'));

module.exports = { connectDB, User, Card, Transaction, sequelize };
