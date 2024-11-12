const usersheetInprogressBar= require('../../services/userSheet/ProgressBarupdate');

const UpdatingprogressUserSheet= async (req,res)=>{
    try{
        const {sheetid,index} = req.body;
        
        const {finduser}=await usersheetInprogressBar(sheetid,index)
        
        res.status(200).json({message:'okey',data:finduser})

    }catch(err){
        console.log("Issue in controller in progress updating ",err)
        res.status(400).json({message:'something-breaks',data:null})

    }

}

module.exports=UpdatingprogressUserSheet;