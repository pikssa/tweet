const userModel = require('../model/userModel');

const createUser = async function (req, res) {
  try {

    let body = req.body;

    let Body = await userModel.create(body);
    return res.status(201).send({ status: true, msg: Body });
  } catch (err) {
    return res.status(500).send({ status: false, err: err.message });
  }
};

module.exports = { createUser };
