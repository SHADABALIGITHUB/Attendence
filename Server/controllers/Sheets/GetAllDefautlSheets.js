const {Sheets} =require('../../models/UserSheets/DefaultSheets');


const GetAllDefaultSheets= async (req,res)=>{

    try{

        const allSheets = await Sheets.find();
         
        


        if(allSheets){
             return res.status(201).json({message:'Success',status:true,data:allSheets});
        }

        


    }
    catch(err){
        console.log("error",err);
        
          return res.status(500).json({message:'Failed',status:false});
    }




}

module.exports=GetAllDefaultSheets;