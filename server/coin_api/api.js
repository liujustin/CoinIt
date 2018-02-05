const axios = require('axios');
const api_url = "https://api.coinmarketcap.com/v1/ticker/?limit=10";

const apiConfig = (app) => {
    app.get('/', (req, res) => {
      res.send('Server is running.')
    });

    app.post('/crypto/add', function (req, res) {
      axios.get(api_url).then(response => {
        // loop through each for its name
        for(var i=0; i<response.data.length; i++) {
          console.log('Name:' + response.data[i].name);
          console.log('Symbol: ' + response.data[i].symbol);
          console.log('Price in USD: ' + response.data[i].price_usd);
          console.log('Rank: ' + response.data[i].rank);
          console.log('===============');

          let  _name = response.data[i].name;
          let _symbol = response.data[i].symbol;
          let _price = response.data[i].price_usd;
          let  _rank = response.data[i].rank;
          var crypto = new Crypto({
            name: _name,
            symbol: _symbol,
            price: _price,
            rank: _rank,
          });
          console.log("here")
          crypto.save()
            .then(item => {
              console.log("Crypto saved successfully!")
            })
            .catch(err => {
              res.status(400).send("Unable to save crypto data to database");
            });
        }
      });
    });
};

module.exports = apiConfig;
