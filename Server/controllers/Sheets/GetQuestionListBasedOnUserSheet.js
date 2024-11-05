const QuestionsListProviderUser=require('../../services/QuestionsListProviderUser');

const GetQuestionListBasedOnUserSheet =async (req,res)=>{

     const {sheetid,userEmail}=req.body;

    try{
            const {progress,Listquestions} =await QuestionsListProviderUser(sheetid,userEmail);
             
             if(progress && Listquestions){
                 res.status(200).json({message:'Fetched Success',progress:progress,questions:Listquestions});
             }
             else{
                res.status(400).json({message:'Fetched Warning',progress:progress,questions:Listquestions});
             }

    }
    catch(err){

        console.log("error in controller in getting question List based on sheet id",err);
        res.status(400).json({message:'Fetched Warning'});
    }


}

module.exports={GetQuestionListBasedOnUserSheet};