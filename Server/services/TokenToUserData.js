const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../config/env");

const tokenToUserData = async (token) => {
  try {
    const Verify = jwt.verify(token, TOKEN_SECRET);

    const id = Verify.userId;

    const Data = await User.find({ _id: id });

    return Data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = { tokenToUserData };
