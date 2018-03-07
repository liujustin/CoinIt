'use strict '
const jwt = require('jsonwebtoken'),
      crypto = require('crypto'),
      User = require('../models/user'),
      config = require('../config/main');

// generate JWT
function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 10080 // seconds
    });
}
// set user info to pass from request
function setUserInfo(request) {
    return {
        _id: request._id,
        firstName: request.profile.firstName,
        lastName: request.profile.lastName,
        email: request.email,
    };
}

/**
    Get All Users
**/
exports.allUsers = (req, res) => {
    User.find({}, (err, users ) => {
        res.json(users);
    });
}
/**
    Post Login
**/
exports.login = (req, res, next) => {
    let userInfo = setUserInfo(req.user);

    res.status(200).json({
        token: 'JWT' + generateToken(userInfo),
        user: userInfo
    });
}
/**
    Post Registration
**/
exports.register = (req, res, next) => {
    // check for errors
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    // return error if no email
        // TODO: UPDATE TO USE EXPRESS FLASH
    if(!email) {
        return res.status(422).send({
            error: "You must enter an email"
        });
    }
    if(!firstName || !lastName) {
        return res.status(422).send({
            error: "You must enter your full name"
        });
    }
    if(!password) {
        return res.status(422).send({
            error: "You must enter your password"
        });
    }
    // Check for existing user
    User.findOne({ email: email }, (err, existingUser) => {
        if(err) { return next(err); }

        if(existingUser) {
            return res.status(422).send({
                error: "This email is already in use"
            });
        }
        // Create User
        let user = new User({
            email: email,
            password: password,
            profile: {
                firstName: firstName,
                lastName: lastName
            }
        });

        console.log(user);

        user.save((err, user) => {
            if(err) { return next(err); }

            let userInfo = setUserInfo(user);

            res.status(201).json({
                token: 'JWT' + generateToken(userInfo),
                user: userInfo
            });
        });
    });
}
