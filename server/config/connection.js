const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://184.153.84.61:32/googlebooks');

module.exports = mongoose.connection;
