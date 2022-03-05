module.exports = (sequelize, type) => {
	return sequelize.define(
		'transaction',
		{
			id: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			origin: {
				type: type.INTEGER,
				allowNull: false
			},
			destiny: {
				type: type.INTEGER,
				allowNull: false
			},
			amount: {
				type: type.INTEGER,
				allowNull: false
			}
		},
		{
			timestamps: false
		}
	);
};
