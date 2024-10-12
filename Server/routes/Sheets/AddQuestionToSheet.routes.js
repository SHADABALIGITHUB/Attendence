const express =require('express');
const router=express.Router();
const {Sheets} =require('../../models/UserSheets/DefaultSheets')
const {UserSheets} =require('../../models/UserSheets/DefaultSheets')

const AddQuestionsIntoSheets=require('../../controllers/Sheets/AddQuestionsIntoSheets');

router.route('/add-question').get(AddQuestionsIntoSheets(Sheets));
router.route('/user/add-question').get(AddQuestionsIntoSheets(UserSheets));

module.exports=router;