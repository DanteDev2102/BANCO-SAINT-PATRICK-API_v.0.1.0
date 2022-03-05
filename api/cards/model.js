module.exports = (sequelize, type) => {
	return sequelize.define(
		'card',
		{
			number: {
				type: type.INTEGER,
				allowNull: null,
				primaryKey: true
			},
			pin: {
				type: type.STRING,
				allowNull: false,
				validate: {
					min: 4
				}
			},
			balance: {
				type: type.DOUBLE,
				allowNull: false,
				validate: {
					min: 0
				}
			}
		},
		{
			timestamps: false
		}
	);
};
