
const User =require('../../models/User.model');
const bcrypt =require("bcrypt");


const changePassword= async (email,otp,password)=> {

     try{

        const user = await User.findOne({ email });

        if (!user) {
            return 400;
        }
        if (user.otp !== otp) {
            return 400;
        }
        if (user.otpExpires < Date.now()) {
            return 400;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Update password and clear OTP-related fields
        user.password = hashedPassword;
        user.verifiedStatus = true; // Set verified status to true
        user.otp = undefined; // Clear OTP
        user.otpExpires = undefined; // Clear expiry
        await user.save();


        return 200;

         
    






     }
     catch(err){

         console.log("errr in mail sending",err);
         return 500;

            

     }
           

}


module.exports={changePassword};