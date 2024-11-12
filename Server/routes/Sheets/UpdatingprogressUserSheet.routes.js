const express=require('express');

const router=express.Router();
const UpdatingprogressUserSheet=require('../../controllers/Sheets/UpdatingprgressUserSheet.controller');

router.route('/updating-usersheet').post(UpdatingprogressUserSheet);


module.exports=router;