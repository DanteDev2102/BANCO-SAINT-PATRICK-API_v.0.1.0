module.exports = (sequelize, type) => {
	sequelize.define('card', {
		card_id: {
			type: type.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		number: {
			type: type.INTEGER,
			allowNull: false
		},
		pin: {
			type: type.INTEGER,
			allowNull: false,
			validate: {
				min: 4,
				max: 4
			}
		},
		balance: {
			type: type.DOUBLE,
			validate: {
				min: 0
			}
		}
	});
};
