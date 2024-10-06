const express=require('express');
const router=express.Router();
const UserVerification=require('../../controllers/Auth/UserVerification');

router.route('/verify').post(UserVerification);


module.exports=router;