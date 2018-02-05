const axios = require('axios');
const api_url = "https://api.coinmarketcap.com/v1/ticker/?limit=10";

const apiConfig = (app) => {
    app.get('/', (req, res) => {
      res.send('Server is running.')
    });
};

module.exports = apiConfig;
