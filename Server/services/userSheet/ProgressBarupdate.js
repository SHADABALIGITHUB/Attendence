const {UserSheets}=require('../../models/UserSheets/DefaultSheets');

const usersheetInprogressBar=async (sheetid,userid,index)=>{
      
       try{

             const user=await UserSheets.find({"userId":userid,"sheetid":sheetid});
            //  console.log(user);
             const QuestionLength= user[0].Listquestion.length;
             console.log(QuestionLength);

             const QuestionArray= user[0].Listquestion;

            //  console.log(QuestionArray);
             const question = QuestionArray.find(item => item.frontendQuestionId === index);

             question.hasSolution?false:true;
             

       }
       catch(err){
        console.log("Error in UserSheet Data upgradation",err);
       }



}



module.exports=usersheetInprogressBar;