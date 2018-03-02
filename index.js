// Init Dependencies
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Config
const Host = require('./configs/host/host');
const Mongo = require('./configs/db/mlab');

// Connect MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(Mongo.uri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('we are connected');
});

//Init Middleware
app.use(cors()); 
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// API
app.use('/api', require(`./routes/book`));

// Error Handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(422).send({err: err.message});
});

// Running Server
app.listen(Host.port, () => {
  console.log(`API running on ${Host.hostname}:${Host.port}`);
});