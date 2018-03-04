// Routes index
const api = require('./api');

const configRoutes = (app) => {
    api(app);
};

module.exports = configRoutes;
