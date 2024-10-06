const express=require('express');

const router=express.Router();


const createUser=require('../../controllers/Auth/CreateUser')


router.route('/create').post(createUser);


module.exports=router;