const express=require('express');
const router=express.Router();
const DefaultSheets=require('../../controllers/Sheets/DefaultSheet');
const DefaultSheetEnter=require('../../controllers/Sheets/DefaultSheetEnter');
router.route('/default').get(DefaultSheets);
router.route('/default').post(DefaultSheetEnter);

module.exports=router;