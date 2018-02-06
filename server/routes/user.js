var User = require('../models/user');

const userConfig = (app) => {
 // Too see all users in DB
 app.get('/users/all', function(req, res) {
    User.find({}, (err, users) => {
      res.json(users)
    })
  });

  app.post('/users/add', function(req, res) {

    var full_name = req.body.full_name;
    var email = req.body.email;
    var password = req.body.password;

    var user = new User ({
      full_name: full_name,
      email: email,
      password: password,
    });
    user.save()
    .then(item => {
      console.log("User saved successfully!")
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  })
};

module.exports = userConfig;
