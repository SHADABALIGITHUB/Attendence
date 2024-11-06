const express=require('express');

const router=express.Router();
const UpdatingprogressUserBased=require('../../controllers/Sheets/UpdatingprogressUserBased');

router.route('/updating-user-progress').post(UpdatingprogressUserBased);


module.exports=router;