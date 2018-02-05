var mongoose = require('mongoose');

var CryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    symbol: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rank: {
        type: Number,
        required: true,
    }
});
