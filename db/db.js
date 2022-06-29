const mongoose = require('mongoose');

let connected = false;
const databaseUrl = process.env.DATABASE_URL;

const databaseMethod = {
	connect() {
		if (!connected) {
			mongoose.connect(databaseUrl);
			connected = true;
		}
	}
};

module.exports = { databaseMethod };
