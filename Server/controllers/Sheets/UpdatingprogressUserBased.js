const {updateprogress}= require('../../services/UpdateProgressBased.DefaultSheet');

const UpdatingprogressUserBased= async (req,res)=>{
    try{
        const {sheetid,index,email} = req.body;
        
        const {finduser}=await updateprogress(email,sheetid,index)
        
        res.status(200).json({message:'okey',data:finduser})

    }catch(err){
        console.log("Issue in controller in progress updating ",err)
        res.status(400).json({message:'something-breaks',data:null})

    }

}

module.exports=UpdatingprogressUserBased;