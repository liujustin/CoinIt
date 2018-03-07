// Modules
const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcrypt-nodejs');

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
    resetPasswordExpires: { type: Date }
    },
    { timestamps: true });

// Password hashing middleware
userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

// Validate user's password
userSchema.methods.comparePassword = (candidatePassword, cb) => {
    bcrypt.compare(comparePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};

const User = mongoose.model('User', userSchema);
module.exports = User;
