const express=require('express');
const router=express.Router();
const otpverify=require('../../controllers/Auth/OtpVerification');

router.route('/verify').post(otpverify);


module.exports=router;