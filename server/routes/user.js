var User = require('../models/user');

const userConfig = (app, passport) => {
 // Too see all users on local database
 app.get('/users/all', function(req, res) {
    User.find({}, (err, users) => {
      res.json(users)
    })
  });

  // Verify user is authenicated
  app.get('/user/verify', function(req,res) {
    console.log(req.user);
    if(req.isAuthenicated()) {
      return res.status(200).json({
        authenicated: true,
        email: req.user.email,
      });
    } else {
      return res.status(200).json({
        error: 'Authenication error: User not verified',
        authenicated: false
      });
    };
  });

  // Post route for Register.js
  app.post('/user/register', function(req, res) {
    // Authenicate w/ Passport
    passport.authenticate('local-signup', function(err, user, info) {
      if(err) {
        return err;
      }
      if(!user) {
        info['authenticated'] = false;
        return res.status(200).json(info);
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.status(200).json({
          authenticated: true
        });
      });

    });
  });

  // Post route for Login.js
  app.post('/user/login', function(req, res) {
    passport.authenticate('local-login', function(err, user, info) {
      if(err) {
        return err
      }
      if(!user) {
        info['authenticated'] = false;
        return res.status(200).json(info);
      }
      req.logIn(user, function(err) {
        if(err) {
          return err
        };
        req.session.save(function(err) {
          if(err) {
            return err
          };
          return res.status(200).json({
            authenicated: true
          });
        });

      });

    });
  });
  // TODO: Logging Out
};

module.exports = userConfig;
