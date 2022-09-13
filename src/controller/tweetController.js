const tweetModel = require('../model/tweetModel');
const userModel = require('../model/userModel');

const createTweet = async function (req, res) {
  try {
    let body = req.body;
    let Body = await tweetModel.create(body);
    return res.status(201).send({ status: true, msg: Body });
  } catch (err) {
    return res.status(500).send({ status: false, err: err.message });
  }
};

const follow = async function (req, res) {
  try {
    let { followerID, followeeID } = req.params;

    let userFollowerCount = await userModel.findByIdAndUpdate(followerID, {
      $inc: { followers_count: +1 },
    });

    let userFolloweeCount = await userModel.findByIdAndUpdate(followeeID, {
      $inc: { following: +1 },
    });

    return res.status(200).send({ status: true, msg: 'success' });
  } catch (err) {
    return res.status(500).send({ status: false, err: err.message });
  }
};

const unfollow = async function (req, res) {
  try {
    let { followerID, followeeID } = req.params;

    let userFollowerCount = await userModel.findByIdAndUpdate(followerID, {
      $inc: { followers_count: -1 },
    });

    let userFolloweeCount = await userModel.findByIdAndUpdate(followeeID, {
      $inc: { following: -1 },
    });

    if (!userFolloweeCount || !userFollowerCount) {
      return res.status(400).send({ status: false, msg: 'Failure' });
    }

    return res.status(200).send({ status: true, msg: 'success' });
  } catch (err) {
    return res.status(500).send({ status: false, err: err.message });
  }
};

const newsFeed = async function (req, res) {
  try {
    let recentNews = await tweetModel.find().sort({ createdAt: -1 }).limit(10);
    if (recentNews.length === 0) {
      return res.status(404).send({ status: false, msg: 'No Feeds Available' });
    }
    return res.status(200).send({ status: true, msg: recentNews });
  } catch (err) {
    return res.status(500).send({ status: false, err: err.message });
  }
};
module.exports = { createTweet, follow, unfollow, newsFeed };
