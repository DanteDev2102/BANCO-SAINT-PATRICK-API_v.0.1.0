module.exports = (sequelize, type) => {
	return sequelize.define('user', {
		user_id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: type.STRING,
		password: type.STRING,
		name: type.STRING,
		lastname: type.STRING
	});
};
