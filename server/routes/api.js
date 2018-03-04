const axios = require('axios');

const api_url = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
// https://api.coinmarketcap.com/v1/ticker/bitcoin/?limit=10
// adding a params to the url enables specific searching.

const api = (app) => {
    // API Routes
    app.get('/api', (req, res) => {
        axios.get(api_url)
            .then(response => {
                for (var i = 0; i < response.data.length; i++) {
                    console.log('Name:' + response.data[i].name);
                    console.log('Symbol: ' + response.data[i].symbol);
                    console.log('Price in USD: ' + response.data[i].price_usd);
                    console.log('Rank: ' + response.data[i].rank);
                    console.log('===============');
                }
                res.json(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    });
    return app;
}

module.exports = api;
