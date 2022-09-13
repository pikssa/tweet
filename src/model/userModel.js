const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'User Name is Required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is Required'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
    followers_count: {
      type: Number,
      default: 0,
    },
    following: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('twitterUser', userSchema);
