const express=require('express');
const router=express.Router();

const {Sheets} =require('../../models/UserSheets/DefaultSheets');
const {UserSheets} =require('../../models/UserSheets/DefaultSheets');

const GetAllDefaultSheets=require('../../controllers/Sheets/GetAllDefautlSheets');
const DefaultSheetEnter=require('../../controllers/Sheets/DefaultSheetEnter');

router.route('/default/:userId').get(GetAllDefaultSheets(Sheets));
router.route('/default').post(DefaultSheetEnter(Sheets));
router.route('/user/:userId').get(GetAllDefaultSheets(UserSheets));
router.route('/user').post(DefaultSheetEnter(UserSheets));


module.exports=router;