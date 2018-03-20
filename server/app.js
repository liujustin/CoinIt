// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('./config/main');

const router = require('./routes');

// MongoDB Connection
mongoose.connect(config.database);

// Express Server
const app = express();

// Bodyparser to get POST requests for API use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Logger for application requests
app.use(morgan('dev'));

// Enable CORS for React
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
})

// API Routes
router(app);

// Listening Port
const port = app.listen(config.port);
console.log("Server listening on port " + config.port);

/**

Code Below Used mainly for production
Should comment out for dev purposes

// Serve static files from React build
app.use(express.static(path.resolve(__dirname, '../client/build')));
// "catchall" for routes that do not match one of the routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/', 'index.html'));
});
**/
