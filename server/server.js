const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

const serverConfig = (app) => {
  // To connect to Mongo
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crypto_tracker' );
  mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
    process.exit();
  });

  app.use(cors());
  // For parsing data from client
  app.use(bodyParser.urlencoded({ extended: true}));
}

module.exports = serverConfig;
