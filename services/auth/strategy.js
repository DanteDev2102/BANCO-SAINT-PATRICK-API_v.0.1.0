const { compare } = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;
const { User } = require('../../network/database');

module.exports = (passport) => {
	passport.serializeUser(({ dataValues }, done) => {
		done(null, dataValues);
	});

	passport.deserializeUser(async (user_id, done) => {
		await User.findOne({
			where: { user_id }
		});
	});
	passport.use(
		new localStrategy(async (username, password, done) => {
			try {
				const user = await User.findOne({
					where: { username }
				});
				if (!user) return done(null, 'el usuario no existe');

				const isCorrectPassword = await compare(
					password,
					user.password
				);
				if (!isCorrectPassword)
					return done(
						null,
						'usuario o contraseña incorrecta'
					);

				return done(null, user);
			} catch (error) {
				return done(error);
			}
		})
	);
};
