const express=require('express');
const router=express.Router();
const GetQuestion=require('../../controllers/Sheets/GetQuestion');
router.route('/:id').get(GetQuestion);


module.exports=router;