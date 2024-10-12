const express=require('express');

const router=express.Router();
const PrepareCompleteSheetUsingId=require('../../controllers/Sheets/PrepareCompleteSheetUsingId');

router.route('/sheet/:id').get(PrepareCompleteSheetUsingId);


module.exports=router;