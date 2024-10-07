const express=require('express');
const router=express.Router();

const LoginUser=require('../../controllers/Auth/LoginUser')

router.route('/login').post(LoginUser);

module.exports=router;
