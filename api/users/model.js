module.exports = (sequelize, type) => {
	return sequelize.define('user', {
		user_id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: type.STRING,
			allowNull: false
		},
		password: {
			type: type.STRING,
			allowNull: false
		},
		name: {
			type: type.STRING,
			allowNull: false
		},
		lastname: {
			type: type.STRING,
			allowNull: false
		}
	});
};
