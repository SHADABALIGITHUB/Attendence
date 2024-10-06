const UserModel = require('../../models/User.model');

const userVerification = async (req, res) => {
  try {
    const opt='1234';
   
    
      
    if (!req.body.otp) {
        return res.status(400).json({ message: 'Otp is required', status: false });
    }
    console.log(req.body.email);
       
    if(req.body.otp ===opt){

      console.log(req.body.otp);
    
      const user = await UserModel.findOneAndUpdate(
        { email: req.body.email }, 
        { verifiedStaus: false },   // Ensure you are updating the correct field name
        { new: true })
    
    if (user) {
     
      return res.status(201).json({ message: 'User Verified successfully', status: true });
    }

   }else{
      res.status(400).json({ message: 'Otp Not Matched', status: false })
   }

  } catch (err) {
    // Handle errors properly
    console.log('Error:', err);
    return res.status(500).json({ message: 'Error ', status: false });
  }
};

module.exports = userVerification;
