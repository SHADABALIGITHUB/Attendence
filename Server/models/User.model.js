const mongoose=require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true, 
        match: /.+\@.+\..+/ 
    },
    username: {
        type: String,
        required: true, // You might want to require this as well
        minlength: 3 // Example: minimum length for username
    },
    password: {
        type: String,
        required: true, // Ensure password is required
        minlength: 6 // Example: minimum length for password
    },
    verifiedStatus: {
        type: Boolean,
        default: false // Default to false
    },
    otp:{
        type: String,

    },
    otpExpires: {
        type: Date,
    },
    currentStreak:{
        type:[mongoose.Schema.Types.Mixed],
        default: [0, new Date()] 
    },
    longestStreak:{
        type: Number,
    },
    defaultSheetProgress: {
        type: Map,
        of: {
          progress: { type: Number, default: 0 }, // Progress in percentage (0-100)
          lastUpdated: { type: Date, default: Date.now } // Track the last update date
        },
        default: {}
    },
     userType: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user', // Default to "user" for new users
      },
      contributions: {
        type: [{ type: Object }],
      },
      dateOfAccountCreation: {
        type: Date,
        default: Date.now, // Default to the current date for account creation
      },
   

});
const User=mongoose.model('user',UserSchema);

module.exports = User;