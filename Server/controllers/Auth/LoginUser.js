const UserModel = require('../../models/User.model');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

const LoginUser = async (req, res) => {
  try {
    // Ensure that 'password' comes from req.body
    const { email,password,  } = req.body;
   
      
    if (!password) {
        return res.status(400).json({ message: 'Password is required', status: false });
    }
    const user = await  UserModel.findOne({ email });
    if(!user){
        return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).json({ error: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
            expiresIn: '1h',
        });   
        
    
    if (user) {
      
      return res.status(201).json({ message: 'User Login successfully', status: true ,token:token});
    }
  } catch (err) {
    // Handle errors properly
    console.log('Error:', err);
    return res.status(500).json({ message: 'Error login user', status: false });
  }
};

module.exports = LoginUser;
