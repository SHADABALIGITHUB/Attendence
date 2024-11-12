const User = require("../../models/User.model");
const bcrypt = require("bcrypt");
const progressArray = require("../../services/UserCreation/ProgressArrayInUser");
const { sendStatus } = require("./MailSend.controller");

const createUser = async (req, res) => {
  try {
    // Ensure that 'password' comes from req.body
    const { username, password, email } = req.body;

    if (!password) {
      return res
        .status(400)
        .json({ message: "Password is required", status: false });
    }

    // Hash the password with bcrypt
    const hashingPassword = await bcrypt.hash(password, 10);

    // changes

    const userprogress = await progressArray();
    // console.log(userprogress);

    // Create the user in the database
    const user = await User.create({
      username,
      password: hashingPassword,
      email,
      verifiedStaus: false,
      defaultSheetProgress: userprogress,
    });


    if (!user) {
      return res.status(500).json({ message: "User creation failed", status: false });
    }

    // If user is successfully created, return a success message
   
      console.log(`User Created with ${email}`);

      const otpvalue =await sendStatus(email);
      if (!otpvalue) {
        return res.status(500).json({ message: "User registered, but OTP issue", status: false });
      }

      await User.updateOne(
        { email },
        {
          $set: { otp: otpvalue, otpExpires: Date.now() + 300000 }, // OTP valid for 5 minutes
        }
      );
  
      return res.status(201).json({ message: "User registered successfully", status: true });
     
    
  } catch (err) {
    // Handle errors properly
    console.log("Error:", err);
    return res
      .status(500)
      .json({ message: "Error creating user", status: false });
  }
};

module.exports = createUser;
