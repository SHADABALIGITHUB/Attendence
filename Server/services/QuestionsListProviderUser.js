const User = require('../models/User.model')
const {Sheets} =require('../models/UserSheets/DefaultSheets')


const QuestionsListProviderUser= async(sheetid,userEmail)=>{

    try{
        const userinfo=await User.find({"email":userEmail})
        const progress=userinfo[0].defaultSheetProgress.get(String(sheetid)).progress;
        const sheetData=await Sheets.find({"sheetid":sheetid})
        const Listquestions=sheetData[0].Listquestion;
        //  console.log(progress.length===Listquestions.length);
        return {progress,Listquestions};
    }

    
    catch(err){
        console.log("service err in user Question based on progress",err)
        return null;
    }

}

module.exports=QuestionsListProviderUser;