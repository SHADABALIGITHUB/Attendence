const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({ 
  cloud_name: process.env.CLOUND_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET,
    
  });


const ImageUploadedToCloud= async (req,res)=>{

   const {name,image}=req.body;
    if(!image){
        return res.status(201).json({status:false});
    }
    try {
        
        const base64Image = image.split(';base64,').pop();
        const result = await cloudinary.uploader.upload(`data:image/png;base64,${base64Image}`);
     
        
           

        // console.log(result);
        return res.status(200).json({status:true,url:result.secure_url});

    }   catch (err) {
    //   console.error(err);
      return res.status(501).json({status:false,url:err});
    }

    

}

module.exports={ImageUploadedToCloud};