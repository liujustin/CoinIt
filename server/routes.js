// Modules
const express = require('express'),
      passport = require('passport');
// Passport Modules
const passportService = require('./config/passport');
// Middleware for login/auth
const passportJWT = passport.authenticate('jwt', { session: false });
const passportLogin = passport.authenticate('local', { session: false });

// Controllers
const UserController = require('./controllers/user'),
      TickerController = require('./controllers/ticker');

/**
    API Routes
**/
module.exports = (app) => {
    const UserRoutes = express.Router();
    const TickerRoutes = express.Router();
    /**
        User Routes
    **/
    UserRoutes.post('/register', UserController.register);
    UserRoutes.post('/login', passportLogin, UserController.login);
    /**
        Ticker Routes
    **/
    TickerRoutes.get('/ticker',  TickerController.ticker);

    // URL for routes
    // ie) To access ticker api, go to '/api/ticker'
    // ie) To access user api, go to '/api/login'
    app.use('/api', UserRoutes, TickerRoutes);
};
