const express = require('express');
const session = require('express-session')
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

const serverConfig = (app) => {
  // Configs for Mongo
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crypto_tracker' );
  mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
    process.exit();
  });

  // Configs for Express
  app.use(cors());
  // To allow req.body etc.
  app.use(bodyParser.urlencoded({ extended: true}));
  // Gonna need this for reading the JSON from the api
  app.use(bodyParser.json());
  app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: false,
  }));
  // Passport express stuff
    // Doc @ https://www.npmjs.com/package/passport
  app.use(passport.intialize());
  app.use(passport.session(());
}

module.exports = serverConfig;
