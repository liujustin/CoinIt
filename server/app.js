const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const jwt = require('jsonwebtoken');
// API Routes
const configRoutes = require('./routes');

// Express
const app = express();
configRoutes(app);

// Bodyparser to get POST requests for API use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Logger for application requests
app.use(morgan('dev'));

/**


commented out for dev purposes

// Serve static files from React build
app.use(express.static(path.resolve(__dirname, '../client/build')));
// "catchall" for routes that do not match one of the routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/', 'index.html'));
});


**/

// Express server port
const port = process.env.PORT || 8000;
app.listen(port);
console.log(`Server is running on ${port}`);
