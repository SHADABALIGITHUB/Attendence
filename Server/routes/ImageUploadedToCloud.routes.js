const express=require('express');
const router=express.Router();
const {ImageUploadedToCloud}=require('../controllers/Sheets/ImageUploadedToCloud');
router.route('/image').post(ImageUploadedToCloud);

module.exports=router;