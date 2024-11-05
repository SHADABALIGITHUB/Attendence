const {GetQuestionListBasedOnSheet}=require('../../controllers/Sheets/GetQuestionListBasedOnSheet');
const express=require('express');

const Router=express.Router();




Router.route('/get-sheet-question').post(GetQuestionListBasedOnSheet);


module.exports=Router;