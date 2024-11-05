const QuestionsListProvider=require('../../services/ProvideQuestionsBasedOnSheetId');

const GetQuestionListBasedOnSheet =async (req,res)=>{

     const {sheetid,sheetType}=req.body;

    try{
            const  questionList =await QuestionsListProvider(sheetid,sheetType);
             if(questionList){
                 res.status(200).json({message:'Fetched Success',questions:questionList});
             }
             else{
                res.status(400).json({message:'Fetched Warning'});
             }

    }
    catch(err){

        console.log("error in controller in getting question List based on sheet id",err);
        res.status(400).json({message:'Fetched Warning'});
    }


}

module.exports={GetQuestionListBasedOnSheet};