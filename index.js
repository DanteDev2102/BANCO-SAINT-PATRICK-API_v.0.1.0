const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const sessionStore = require('express-session-sequelize')(
	session.Store
);

const { connectDB, sequelize } = require('./network/database');
const routes = require('./network/routes');
const {
	portServer,
	hostServer,
	sessionSecret
} = require('./network/config');
require('./services/auth/strategy')(passport);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
	session({
		secret: sessionSecret,
		resave: false,
		saveUninitialized: false,
		store: new sessionStore({ db: sequelize })
	})
);
app.use((req, res, next) => {
	res.locals.session = req.session;
	next();
});
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('session'));

routes(app);

app.get('/login', (req, res) => {
	console.log(req.isAuthenticated());
	res.send('no te has podido logear');
});

app.get('/', (req, res) => {
	res.send(req.user);
});

app.listen(portServer, () => {
	connectDB();
	console.log(`server running in ${hostServer}:${portServer}`);
});
