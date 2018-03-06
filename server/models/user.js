// Modules
const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcrypt');

// User Schema
const userSchema = new Schema ({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        }
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    {
        timestamps: true
    }
});

// Password hashing
userSchema.pre('save', (next) => {
    var user = this;
    bcrypt.hash(user.password, 10, (err, hash) {
        if(err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

module.exports = mongoose.model('User', userSchema);
