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
    // By default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true // Allows us to pass back the entire request to the callback
  },
  function(req, email, password, done) {
    // User.findOne wont fire unless data is sent back
    process.nextTick(function() {
      console.log(req.body);
      // Check to see if user exists
      User.findOne({ 'local.email':  email }, function(err, user) {

        if (err) {
          return done(err);
        }

        if (user) {
          return done(null, false, { signupMessage: 'That email is already taken.' });
        } else {
          // Check for password and entered password
          if (req.body.password !== req.body.passwordRepeat) {
            return done(null, false, { signupMessage: 'Passwords do not match.' });
          }
          // If user does not exist, create user
          var newUser = new User()
          // Set the user's local credentials
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);
          newUser.local.usertype = req.body.usertype;
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
    passReqToCallback : true
  },
  function(req, email, password, done) {
    // Check to see if the user logging in exists in our db
    console.log(email);
    console.log(password);
    User.findOne({ 'local.email': email }, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, { loginMessage: 'No user found.' });
      }

      if (!user.validPassword(password)) {
        return done(null, false, { loginMessage: 'Oops! Wrong password.' });
      }

      return done(null, user);
    });
  }));
};
