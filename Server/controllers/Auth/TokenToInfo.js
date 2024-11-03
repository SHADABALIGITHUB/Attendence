const { tokenToUserData } = require("../../services/TokenToUserData");

const TokenToInfo = async (req, res) => {
  try {
    const { token } = req.body;
    if (token) {
      const UserData = await tokenToUserData(token);
      // console.log(UserData);

      res
        .status(200)
        .json({ message: "Work done User Data :", user: UserData });
    }
  } catch (err) {
    console.log(err, "Something Went Wrong Here");
    res.status(400).json({ message: "Error  :", user: null });
  }
};

module.exports = { TokenToInfo };
