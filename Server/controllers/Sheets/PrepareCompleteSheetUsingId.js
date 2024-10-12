const {Sheets} =require('../../models/UserSheets/DefaultSheets');


const PrepareCompleteSheetUsingId= async (req,res) =>{



      try{
        
       const UserSheetId=req.params.id;

        

       const SheetData= await Sheets.findOne({sheetid:UserSheetId});

        

       return res.status(200).json({data:SheetData});
       

       
      }
      catch(err){
        console.log("Error in this Preparing ",err);
        res.status(500).json({status:false});
      }

}

module.exports=PrepareCompleteSheetUsingId;