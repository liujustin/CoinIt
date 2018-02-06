const axios = require('axios');
const api_url = "https://api.coinmarketcap.com/v1/ticker/?limit=10";

const apiConfig = (app) => {
  axios.get(api_url).then(response => {
      // loop through each for its name
      for (var i = 0; i < response.data.length; i++) {
          console.log('Name:' + response.data[i].name);
          console.log('Symbol: ' + response.data[i].symbol);
          console.log('Price in USD: ' + response.data[i].price_usd);
          console.log('Rank: ' + response.data[i].rank);
          console.log('===============');
      }
  })
  
    app.get('/', (req, res) => {
      res.send('Server is running; Check terminal for latest crypto updates.')
    });
};

module.exports = apiConfig;
