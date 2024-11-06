const User = require('../models/User.model')
// const {Sheets} =require('../models/UserSheets/DefaultSheets')


const updateprogress= async (email,sheetid,index)=>{

    try{

        // Find the user by their email
        const findUser = await User.find({"email": email});
        
        // Ensure the user exists
        if (findUser.length === 0) {
            throw new Error("User not found");
        }

        // Access the progress map of the user's default sheet
        const user = findUser[0];
        const sheetProgress = user.defaultSheetProgress.get(String(sheetid));
        
        // Ensure the sheet exists in the progress map
        if (!sheetProgress) {
            throw new Error("Sheet not found in user's progress");
        }

        // Access the progress array at the specified index
        let currentProgress = sheetProgress.progress[index];
        
        // Toggle the progress value: 0 <=> 1
        sheetProgress.progress[index] = currentProgress === 1 ? 0 : 1;

        
        await user.save();

        // console.log(`Progress updated: ${sheetProgress.progress[index]}`);
        // // const filteredsheet=await Sheets.find({"sheetid":sheetid});
        const finduser=await User.find({"email":email});
        return {finduser};
        // console.log(finduser[0].defaultSheetProgress.get(String(sheetid)).progress[index]);
        
        // console.log(filteredsheet);

    }
    catch(err){
         console.log("Issue in Updating progress",err);
    }


}

// updateprogress("msnaziya60@gmail.com",1,5);

module.exports={updateprogress};

