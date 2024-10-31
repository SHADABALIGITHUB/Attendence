const UserModel = require('../../models/User.model');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

const LoginUser = async (req, res) => {
  try {
    // Ensure that 'password' comes from req.body
    const { email,password,  } = req.body;
   
      
    if (!password || password==='') {
        return res.status(200).json({ message: 'Password is required', status: false });
    }
    if (!email || email==='') {
      return res.status(200).json({ message: 'Email is required', status: false });
  }
    const user = await  UserModel.findOne({ email });

    if(!user){
        return res.status(200).json({ message: 'Email is not Register', status: false });
    }
    if(!user.verifiedStatus){
      
      return res.status(200).json({ message: 'user not Verified', status: false });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(200).json({ message: 'Password not matched', status: false });
        }
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
            expiresIn: '1h',
        });   
        
    
    if (user) {
      
      return res.status(200).json({ message: 'User Login successfully', status: true ,token:token,user:user});
    }
  } catch (err) {
    // Handle errors properly
    console.log('Error:', err);
    return res.status(500).json({ message: 'Server Error', status: false });
  }
};

module.exports = LoginUser;
