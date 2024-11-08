const User = require('../../models/User.model');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const otpGenerator =require('../../utils/otpGenerator');
const progressArray=require('../../services/UserCreation/ProgressArrayInUser');
require('dotenv');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL, // Your Gmail address
    pass: process.env.PASSWORD_MAIL // The 16-character app-specific password you just created
  }
});

const createUser = async (req, res) => {

  try {
    // Ensure that 'password' comes from req.body
    const { username, password, email  } = req.body;

  
   
      
    if (!password) {
        return res.status(400).json({ message: 'Password is required', status: false });
    }
   


    // Hash the password with bcrypt
    const hashingPassword = await bcrypt.hash(password, 10);
    const otp=otpGenerator()

    const userprogress=await progressArray();
    // console.log(userprogress);
    


    // Create the user in the database
    const user = await User.create({
      username,
      password: hashingPassword,
      email,
      verifiedStaus:false,
      otp:otp,
      otpExpires: Date.now()+300000,
      defaultSheetProgress:userprogress




    });

    // console.log(user);

    // If user is successfully created, return a success message
    if (user) {
      console.log(`User Created with ${email}`);
     
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Leet Sheet Otp Verification', 
        text: `Your OTP Is : ${otp} `, 
        
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(' Mail issue ',error);
          return res.status(201).json({ message: 'User registered But Otp issue', status: false });
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      return res.status(201).json({ message: 'User registered successfully', status: true });
    }
  } catch (err) {
    // Handle errors properly
    console.log('Error:', err);
    return res.status(500).json({ message: 'Error creating user', status: false });
  }
};

module.exports = createUser;
