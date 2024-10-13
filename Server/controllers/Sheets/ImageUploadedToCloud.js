const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'ddnum51yo', 
    api_key: '258975249557631', 
    api_secret: 'ol1EnxSwSzGqz5cIAg4C9zO-U5M',
    
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