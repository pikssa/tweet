const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const tweetSchema = new mongoose.Schema(
  {
    tweetBody: {
      type: String,
      required: [true, 'Tweet is Required to create Tweet'],
    },
    userId:{
      type:ObjectId,
      required:[true,'UserId is required For Tweet']
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model('college', tweetSchema);
