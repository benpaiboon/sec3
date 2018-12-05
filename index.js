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

// APIs
fs.readdir('app/routes', (err, routeFiles) => {
  routeFiles.forEach(routePaths => {
    console.log(routePaths);
    // Check request path
    app.use(`${BaseUrl}`, (req, res, next) => {
      let reqPath = req.path;
      reqPath = reqPath.substr(1);
      if (reqPath.indexOf('/') !== -1) {
        reqPath = reqPath.substring(0, reqPath.indexOf('/'));
      }

      let internalPath = routePaths.substring(0, routePaths.indexOf('.'));
      console.log('req', reqPath);
      console.log('in', internalPath);
      if (reqPath !== internalPath) {
        res.json({ message: 'Request url not found.' });
      } else {
        next();
      }
    });

    // Right API Path
    app.use(`${BaseUrl}`, require(`./app/routes/${routePaths}`));
  });
});

// Running Server
app.listen(Host.port, () => {
  console.log(`API running on ${Host.hostname}:${Host.port}${BaseUrl}/<route>`);
});