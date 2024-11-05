const {GetQuestionListBasedOnUserSheet}=require('../../controllers/Sheets/GetQuestionListBasedOnUserSheet');
const express=require('express');

const Router=express.Router();




Router.route('/get-userbased-sheet-question').post(GetQuestionListBasedOnUserSheet);


module.exports=Router;