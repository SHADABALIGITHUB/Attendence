const {Sheets} = require('../../models/UserSheets/DefaultSheets');



const progressArray= async()=>{

      try{

const defaultSheet=await Sheets.find();


   const finaldefaultsheetprogress={};

    for(let sheet of defaultSheet){

        //   console.log(sheet.Listquestion.length);


          const progressArray = Array(sheet.Listquestion.length).fill(0);
           
          const SheetId=sheet.sheetid;

          finaldefaultsheetprogress[SheetId] = {
            progress: progressArray,
            lastUpdated: new Date()
        };
    }

    return finaldefaultsheetprogress;
}catch(err){
    
     return null;
}

    

}

// progressArray();


module.exports=progressArray;