// Init Database Config
const mongoUsername = 'dbbook';
const mongoPassword = 'dbbook123'
const mongoHost = '@ds153948.mlab.com:53948';
const dbName = 'book-management';
const mongoURI = `mongodb://${mongoUsername}:${mongoPassword}${mongoHost}/${dbName}`;

// Connect MongoDB
const mongoose = require('mongoose');
mongoose.connect(mongoURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('System is connected to the MongoDB');
});

module.exports = {
  openConnection: db
}