
const AddQuestionsIntoSheets=(Sheets)=> async (req,res)=>{

     try{ 

          const {questionid,questionName,sheetid}=req.body;
          
        //   const questionid=2406;
        //   const questionName="Divide Intervals into Minimum Numberof Groups";
        //   const sheetid=11;
            
            const List= await Sheets.findOne({sheetid:sheetid});
          

            if(!List){
                return res.status(404).json({message:'List not found'});
            }

            const Already=List.Listquestion.some(q=>(q.questionid===questionid));



            if(Already){
                return res.status(404).json({message:'Question Already in List'});

            }
            




            


            const response= await Sheets.findOneAndUpdate(
                {sheetid:sheetid},
                {$push:{Listquestion:{questionid:questionid,questionName:questionName}}},
                {new:true,runValidators:true}

            )

            if(!response){
                return res.status(404).json({message:'List not found'});
            }

            return res.status(200).json({"Updation done ":response});


         

     }
     catch(err){
       return   res.status(500).json({message:'Server Error: ' + err});
     }

    
}

module.exports=AddQuestionsIntoSheets;