const User =require('../../models/User.model');
const {sendStatus}=require("./MailSend.controller");
const {changePassword}=require('../../services/UserCreation/ChangePassword')
const forgetpasswordController= async (req,res)=>{

     const {email}=req.body;

     try{
         const result= await User.findOne({email:email});
         if(!result){
            console.log("User not Registered")
            res.status(400).json({message:"User Not Found"});
         }

         const otpvalue =await sendStatus(email);
      if (!otpvalue) {
        console.log("Otp Issue")
        return res.status(500).json({ message: "User Find, but OTP issue", status: false });
      }

      await User.updateOne(
        { email },
        {
          $set: { otp: otpvalue, otpExpires: Date.now() + 300000 }, // OTP valid for 5 minutes
        }
      );
  



         res.status(200).json({message:'Mail Send Please Change Password'});

     }catch(err){
        console.log("error in user find",err)
        res.status(500).json({message:"Err"});


     }

}

const ChangePasswordController= async(req,res) =>{
    const {email,password,otp}=req.body;
    try{

        const response=await changePassword(email,otp,password);
         
        console.log(response);
        if(response===200){
            console.log("done password Update")

          res.status(200).json({ message: 'Password Changed Successfully' });
        }
        else{
            console.log("Error in something")
            res.status(400).json({message:'Otp not verified' });
        }


    }catch(err){

         console.log("error In changing password",err);
         res.status(400).json({ error: error.message });

    }

}




module.exports={forgetpasswordController,ChangePasswordController};