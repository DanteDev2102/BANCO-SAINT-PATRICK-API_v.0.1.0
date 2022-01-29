const express = require('express');
const cors = require('cors');

const { connectDB } = require('./network/database');
const routes = require('./network/routes');
const { portServer, hostServer } = require('./network/config');

const app = express();

routes(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(portServer, () => {
	connectDB();
	console.log(`server running in ${hostServer}:${portServer}`);
});
