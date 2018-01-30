const axios = require('axios');
const api_url = "https://api.coinmarketcap.com/v1/ticker/?limit=10";

const apiConfig = (axios) => {
    axios.get(api_url).then(response => {
        console.log(response.data);
    });
};

module.exports = apiConfig;
