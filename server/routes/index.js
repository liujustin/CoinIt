// Index for all Routes
const apiConfig = require('../coin_api/api');

const routesConfig = (app) => {
    apiConfig(app);
};

module.exports = routesConfig;
