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
    }
   

});
const User=mongoose.model('user',UserSchema);

module.exports = User;