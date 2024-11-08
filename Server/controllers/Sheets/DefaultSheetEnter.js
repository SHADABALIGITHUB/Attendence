const  User=require('../../models/User.model');

const DefaultSheetEnter=(Sheets)=> async (req,res)=>{

      try{

       const {title,useremail,sheetImg}=req.body;
      
      

       const response= await Sheets.create({
        
        Listquestion:[],
        title:title,
        userId:useremail,
        sheetImg:sheetImg,

        

      });

      if(!response){
        return res.status(500).json({ message: 'Error Adding Sheet', status: false });

      }


      const sheetid= response.sheetid;



        
      const defaultSheetProgress = {
       [sheetid]: {
          progress: [],          
          lastUpdated: new Date() 
        }
      };
      const addedProcessArray=await User.updateMany({},{

          $set:{[`defaultSheetProgress.${sheetid}`]: defaultSheetProgress[sheetid]}

          
      })

      if(addedProcessArray.modifiedCount>0){
        return res.status(201).json({ message: 'Added Sheet', status: true });
      }
      else{
        return res.status(500).json({ message: 'No users updated', status: false });
  
      }


    }
    catch(err){


    console.log('Error:', err);
    return res.status(500).json({ message: 'Error Adding Sheet', status: false });


    }

  
  
     
       

      

         
    

}

module.exports=DefaultSheetEnter;