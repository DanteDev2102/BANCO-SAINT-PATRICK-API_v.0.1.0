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
require('./services/auth/strategy')(passport);
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
app.use((req, res, next) => {
	res.locals.session = req.session;
	next();
});
app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.get('/login', (req, res) => {
	res.send('no te has podido logear');
});

app.get('/', (req, res) => {
	res.send(req.user);
});

app.listen(portServer, () => {
	connectDB();
	console.log(`server running in ${hostServer}:${portServer}`);
});
