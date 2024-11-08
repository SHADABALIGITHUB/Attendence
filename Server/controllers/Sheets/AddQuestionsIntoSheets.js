
const AddQuestionsIntoSheets=(Sheets)=> async (req,res)=>{

     try{ 

          const {row,sheetid,}=req.body;
          
            
            const List= await Sheets.findOne({sheetid:sheetid});
          

            if(!List){
                return res.status(200).json({message:'List not found'});
            }

            const Already=List.Listquestion.some(q=>(q.frontendQuestionId=== row.frontendQuestionId));
              
            
            

            if(Already){
                return res.status(200).json({message:'Question Already in List'});

            }
            




            const response= await Sheets.findOneAndUpdate(
                {sheetid:sheetid},
                {$push:{Listquestion:row}},
                {new:true,runValidators:true}

            )

            if(!response){
                return res.status(200).json({message:'Issue in adding'});
            }

            return res.status(200).json({message:"Updation done"});


         

     }
     catch(err){
         console.log(err);
       return   res.status(500).json({message:"Server Error"});
        
     }

    
}

module.exports=AddQuestionsIntoSheets;