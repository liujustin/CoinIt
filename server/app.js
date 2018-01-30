const express = require('express');
const axios = require('axios');

const serverConfig = require('./server');
const routesConfig = require('./routes');
const apiConfig = require('./coin_api/api');

// Express
const app = express();

serverConfig(app);
routesConfig(app);
apiConfig(axios);

// Local setup
app.listen(process.env.PORT || 5000);
console.log('Server running on Port 5000');
