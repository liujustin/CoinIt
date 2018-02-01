const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function(passport) {
  // ================================
  // Serialization && deserialization
  // ================================
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // ============
  // Local Signup
  // ============
  passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, email, password, done) {
    // User.findOne wont fire unless data is sent back
    process.nextTick(function() {
      console.log(req.body);
      // Check to see if user exists
      User.findOne({ 'local.email':  email }, function(err, user) {
        // Error logging
        if (err) {
          return done(err);
        }
        // If email is taken, fallback
        if (user) {
          return done(null, false, { signupMessage: 'That email is already taken.' });
        } else {
          // Check for password and entered password
          if (req.body.password !== req.body.passwordRepeat) {
            return done(null, false, { signupMessage: 'Passwords do not match.' });
          }
          // If User does not exist, create user
          var newUser = new User()
          // set the user's local credentials
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);
          newUser.local.usertype = req.body.usertype;
          // save the user
          newUser.save(function(err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        };
      });
    });
  }));

  // ============
  // Local Login
  // ============
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, email, password, done) { // callback with email and password from our form
    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    console.log(email);
    console.log(password);
    User.findOne({ 'local.email': email }, function(err, user) {
      // if there are any errors, return the error before anything else
      if (err) {
        return done(err);
      }
      // if no user is found, return the message
      if (!user) {
        return done(null, false, { loginMessage: 'No user found.' });
      }
      // if the user is found but the password is wrong
      if (!user.validPassword(password)) {
        return done(null, false, { loginMessage: 'Oops! Wrong password.' });
      }
      // all is well, return successful user
      return done(null, user);
    });

  }));

};
