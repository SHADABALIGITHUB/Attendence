const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        require:true,
    },
    username:String,
    password:String,
    verifiedStaus:Boolean,

})

const User=mongoose.model('user',UserSchema);

module.exports = User;