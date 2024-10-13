

const DefaultSheetEnter=(Sheets)=> async (req,res)=>{

      try{

       const {title,useremail,sheetImg}=req.body;
      
      

      const response= await Sheets.create({
        
        Listquestion:[],
        title:title,
        userId:useremail,
        sheetImg:sheetImg,

        

      });

      if(response){
        return res.status(201).json({ message: 'Added Question Completed', status: true });
      }


    }
    catch(err){


    console.log('Error:', err);
    return res.status(500).json({ message: 'Error Adding Question', status: false });


    }

  
  
     
       

      

         
    

}

module.exports=DefaultSheetEnter;