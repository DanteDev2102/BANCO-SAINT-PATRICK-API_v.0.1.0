module.exports = (sequelize, type) => {
	return sequelize.define(
		'user',
		{
			id: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			username: {
				type: type.STRING(25),
				allowNull: false,
				unique: true,
				validate: {
					isAlphanumeric: true
				}
			},
			password: {
				type: type.STRING(70),
				allowNull: false
			},
			name: {
				type: type.STRING(40),
				allowNull: false
			},
			lastname: {
				type: type.STRING(40),
				allowNull: false
			}
		},
		{
			timestamps: false
		}
	);
};
