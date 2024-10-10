const express=require('express');
const router=express.Router();

const GetAllDefaultSheets=require('../../controllers/Sheets/GetAllDefautlSheets');
const DefaultSheetEnter=require('../../controllers/Sheets/DefaultSheetEnter');
router.route('/default').get(GetAllDefaultSheets);
router.route('/default').post(DefaultSheetEnter);

module.exports=router;