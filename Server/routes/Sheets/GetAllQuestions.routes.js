const express=require('express');
const router=express.Router();
const GetAllQuestions=require('../../controllers/Sheets/GetAllQuestions');

router.route('/list').get(GetAllQuestions);

module.exports=router;