// Passport, Strategie, and configs
const passport = require('passport'),
      User = require('../models/user'),
      config = require('./main'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt,
      LocalStrategy = require('passport-local');

/**
    Options for Login Auth
**/
// Use email instead of username as "username"
const localOptions = { usernameField: 'email' };
// JWT auth options
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: config.secret
};

/**
    Login Auth
**/
// Passport Local Login Strategy
// Taken from passport documentation
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    User.findOne({ email: email}, (err, user) => {
        if(err) { return done(err); }
        if(!user) { return done(null, false, {error: 'Incorrect Login, Please try again.'});}

        user.comparePassword(password, (err, isMatch) => {
            if(err) { return done(err); }
            if(!isMatch) { return done(null, false, { error: "Could not verify login. Please try again."});}

            return done(null, user);
        });
    });
});

// JWT Login Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload._id, (err, user) => {
        //  add console.log(payload); to your code and search the console for the right user ID if you are always getting the same user back when logging in different user accounts.
        if(err) { return done(err, false); }

        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

passport.use(jwtLogin);
passport.use(localLogin);
