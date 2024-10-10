const express=require('express');

const router=express.Router();
const PrepareCompleteSheetUsingId=require('../../controllers/Sheets/PrepareCompleteSheetUsingId');

router.route('/:id').get(PrepareCompleteSheetUsingId);


module.exports=router;