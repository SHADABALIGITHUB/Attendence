
  

const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/leetcode';

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

