// Index for all Routes
const apiConfig = require('../coin_api/api');
const userConfig = require('./user');

const routesConfig = (app) => {
    apiConfig(app);
    userConfig(app);
};

module.exports = routesConfig;
