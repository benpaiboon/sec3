// Init Dependencies
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Config
const Host = require('./app/configs/host/host');
const MongoDB = require('./app/configs/db/mlab');
const BaseUrl = require('./app/configs/baseUrl/baseUrl');

// Connect MongoDB
MongoDB.openConnection;

//Init Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Index Route
app.get(`${BaseUrl}`, (req, res) => {
  res.redirect('/books');
});

// Request Any Routes depend on URL path
fs.readdir('app/routes', (err, routeFiles) => {
  routeFiles.forEach(routePaths => {
    app.use(`${BaseUrl}`, require(`./app/routes/${routePaths}`));
  });
});

// Running Server
app.listen(Host.port, () => {
  console.log(`API running on ${Host.hostname}:${Host.port}${BaseUrl}<route>`);
});