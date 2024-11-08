const User=require('../../models/User.model');

const updatedProgressOnaddingQuestion=async (sheetid)=>{

    try {
        const UserData = await User.find();
    
        for (let user of UserData) {
            // Access user's `defaultSheetProgress` for the specific sheet ID
            const sheetProgressEntry = user.defaultSheetProgress.get(String(sheetid));
            
            if (!sheetProgressEntry || !sheetProgressEntry.progress) {
                console.log(`Sheet not found in user's progress for user: ${user._id}`);
                continue; // Skip if no progress found for the sheet ID
            }
    
            // Get the progress array and add a `0` at the end
            const sheetProgress = sheetProgressEntry.progress;
            sheetProgress.push(0); // Add 0 to the end of the progress array
    
            // Update the lastUpdated field to the current date
            sheetProgressEntry.lastUpdated = new Date();
    
            // Save the updated progress back to the user
            await User.updateOne(
                { _id: user._id },
                { $set: { [`defaultSheetProgress.${sheetid}.progress`]: sheetProgress, [`defaultSheetProgress.${sheetid}.lastUpdated`]: sheetProgressEntry.lastUpdated } }
            );
    
            console.log(`Updated progress for user: ${user._id}`);
        }

        return true;
    }
    catch(err){

        console.log("error in Updating user data On Adding  Question in it ",err);
        return false;

    }

}

module.exports=updatedProgressOnaddingQuestion;