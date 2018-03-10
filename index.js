// Init Dependencies
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Config
const Host = require('./configs/host/host');
const MongoDB = require('./configs/db/openConnection');

// Connect MongoDB
MongoDB.openConnection;

//Init Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// APIs
const routesFolder = './routes/';
fs.readdir(routesFolder, (err, routeFiles) => {
  routeFiles.forEach(routePaths => {
    app.use('/api', require(`./routes/${routePaths}`));
  });
});

// Running Server
app.listen(Host.port, () => {
  console.log(`API running on ${Host.hostname}:${Host.port}`);
});