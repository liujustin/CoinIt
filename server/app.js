const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 4200;
const databaseUrl = 'mongodb://localhost:27017/justinliu'

const serverConfig = require('./server');
const routesConfig = require('./routes');
const apiConfig = require('./coin_api/api');

// Express
const app = express();

app.use(bodyParser.json());
serverConfig(app);
routesConfig(app);
apiConfig();

// Local setup
app.listen(process.env.PORT || 5000);
console.log('Server running on Port 5000');
