const express=require('express');
const router=express.Router();

const GetAllDefaultSheets=require('../../controllers/Sheets/GetAllDefautlSheets');
const DefaultSheetEnter=require('../../controllers/Sheets/DefaultSheetEnter');
router.route('/user').get(GetAllDefaultSheets);
router.route('/user').post(DefaultSheetEnter);

module.exports=router;