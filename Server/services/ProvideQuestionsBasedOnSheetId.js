const {Sheets,UserSheets}=require('../models/UserSheets/DefaultSheets');


const QuestionsListProvider=async (sheetId,sheetType)=>{

     try{

         if(sheetType==='Default'){  
         const QuestionList= await Sheets.find({sheetid:sheetId})
             if(QuestionList){
            return QuestionList[0].Listquestion;
            }
         }else{
         
         const QuestionList= await UserSheets.find({sheetid:sheetId})
            if(QuestionList){
            return QuestionList[0].Listquestion;
            }

         }
        
       
         
          return null;
         
         

     }catch(err){
         console.log("error in Question fetching Based on sheet id");
         return null;
     }

}

module.exports=QuestionsListProvider;