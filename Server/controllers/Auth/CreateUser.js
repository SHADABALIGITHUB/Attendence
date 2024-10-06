const UserModel = require('../../models/User.model');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    // Ensure that 'password' comes from req.body
    const { username, password, email } = req.body;
   
      
    if (!password) {
        return res.status(400).json({ message: 'Password is required', status: false });
    }
    // Hash the password with bcrypt
    const hashingPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const user = await UserModel.create({
      username,
      password: hashingPassword,
      email,
      verifiedStaus:false

    });

    // If user is successfully created, return a success message
    if (user) {
      console.log(`User Created with ${email}`);
      return res.status(201).json({ message: 'User registered successfully', status: true });
    }
  } catch (err) {
    // Handle errors properly
    console.log('Error:', err);
    return res.status(500).json({ message: 'Error creating user', status: false });
  }
};

module.exports = createUser;
