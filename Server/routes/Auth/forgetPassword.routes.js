const express=require('express');
const router=express.Router();

const {forgetpasswordController,ChangePasswordController}=require('../../controllers/Auth/forgetPassword.controller');

router.route('/email-send-otp').post(forgetpasswordController);
router.route('/change-password').post(ChangePasswordController);

module.exports=router;
