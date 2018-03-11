const mongoose = require('mongoose');
const Mlab = require('./mlab');

// Connect MongoDB
mongoose.connect(Mlab.uri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('System is connected to the MongoDB');
});

module.exports = {
  openConnection: db
}