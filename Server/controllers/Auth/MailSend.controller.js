const nodemailer = require('nodemailer');
const otpGenerator =require('../../utils/otpGenerator');
require('dotenv');

const otp=otpGenerator();
const sendStatus= async (email) =>{

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.PASSWORD_MAIL // The 16-character app-specific password you just created
    }
  });

   
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Leet Sheet Otp Verification', 
    text: `Your OTP Is : ${otp} `, 
    
  };
 

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(' Mail issue ',error);
      return  null;
    } else {
      console.log('Email sent: ' + info.response);
     
    }
  });

  return otp;
}

  module.exports={sendStatus};