const express = require('express');
const passport = require('passport');

const serverConfig = require('./server');
const routesConfig = require('./routes');

// Express
const app = express();

serverConfig(app, passport);
routesConfig(app, passport);

// Local setup
app.listen(process.env.PORT || 5000);
console.log('Server running on Port 5000');
