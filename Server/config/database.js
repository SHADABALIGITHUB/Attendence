
  

const mongoose = require('mongoose');
require('dotenv').config();
const url =process.env.MONGODB_URI;


// Define the function and then export it
const mongooseConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log('Database Connected successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    throw err;
  }
};

module.exports = mongooseConnect;

