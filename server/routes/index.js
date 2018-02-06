// Index for all Routes
const apiConfig = require('../coin_api/api');
const userConfig = require('./user');

const routesConfig = (app,passport) => {
    apiConfig(app);
    userConfig(app, passport);
};

module.exports = routesConfig;
