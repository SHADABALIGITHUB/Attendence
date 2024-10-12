const GetAllDefaultSheets=(Sheets)=> async (req,res)=>{
    
       const { userId } = req.params;
      
    try{
        

        const allSheets = await Sheets.find({ userId: userId });
         
        

            
        if(allSheets.length >0){
             return res.status(201).json({message:'Success',status:true,data:allSheets});
        }
        else{

            return res.status(201).json({message:'Empty',status:true,data:allSheets});
             
        }

        


    }
    catch(err){
        console.log("error",err);
        
          return res.status(500).json({message:'Failed',status:false});
    }




}

module.exports=GetAllDefaultSheets;