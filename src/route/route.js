const express = require('express');
const router = express.Router();
const {
  createTweet,
  follow,
  unfollow,
  newsFeed,
} = require('../controller/tweetController');
const { createUser } = require('../controller/userController');

// Creating User
router.post('/postUser', createUser);

//Post Tweet
router.post('/postTweet', createTweet);

// follow User
router.put('/follow/:followerID/:followeeID', follow);

// unfollow User
router.put('/unfollow/:followerID/:followeeID', unfollow);

//News Feed
router.get('/getNewsFeed', newsFeed);

module.exports = router;
