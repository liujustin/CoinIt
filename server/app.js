const express = require('express');

const serverConfig = require('./server');
const routesConfig = require('./routes');

// Express
const app = express();

serverConfig(app);
routesConfig(app);

// Local setup
app.listen(process.env.PORT || 5000);
console.log('Server running on Port 5000');
