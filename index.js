const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const { connectDB } = require('./network/database');
const routes = require('./network/routes');
const {
	portServer,
	hostServer,
	sessionSecret
} = require('./network/config');
const __session = require('./middlewares/session');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
	session({
		secret: sessionSecret,
		name: 'express-session',
		resave: false,
		saveUninitialized: true
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(__session(req, res, next));

routes(app);

app.listen(portServer, () => {
	connectDB();
	console.log(`server running in ${hostServer}:${portServer}`);
});
