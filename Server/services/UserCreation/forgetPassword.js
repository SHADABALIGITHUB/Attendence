const User =require('../../models/User.model');
const otpGenerator = require('../../utils/otpGenerator');
require('dotenv');

const forgetpassword= async (email)=> {

     try{

         const user=await User.find({"email":email})

         if(!user){
             
            return null;
         }
         const otp=otpGenerator();

         const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Leet Sheet Otp forget Password', 
            text: `Your OTP Is : ${otp} `, 
            
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(' Mail issue ',error);
              return false;
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    
          const data=await User.updateMany({},{
            '$set':{'otp':otp},
            '$set':{otpExpires:Date.now()+300000}

         })
         
         if(data){

         return true;
         }

         return false;






     }
     catch(err){

         console.log("errr in mail sending",err);
            

     }
           

}


module.exports=forgetpassword;