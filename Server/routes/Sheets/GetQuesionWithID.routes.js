const express=require('express');
const router=express.Router();
const GetQuestion=require('../../controllers/Sheets/GetQuestion');
router.route('One/:id').get(GetQuestion);


module.exports=router;