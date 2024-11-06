const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors=require('cors');


const app = express();

//  cors allow all  while in dev phase 
app.use(cors('*'));
// app.use(bodyParser.json());
app.use(express.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


//  mongo db connect
const mongooseConnect = require('./config/database');
mongooseConnect();

// const User =require('./models/User.model');
// const {Sheets}= require('./models/UserSheets/DefaultSheets');


// async function addDefaultSheetProgress() {
//     try {
//         // Step 1: Fetch all the default sheets from the DefaultSheet schema
//         const defaultSheets = await Sheets.find({});
    
//         //  console.log(defaultSheets.length)
//         // Step 2: For each default sheet, update the progress for each user
//         // for (const sheet of defaultSheets) {
//           // Get the sheet ID and the number of questions
//         //   const { sheetid, Listquestion} = sheet;
//         //   const numQuestions = Listquestion.length;
//         //   console.log(numQuestions);
    
//           // Step 3: Update users' progress for this sheet
//           // Fetch all users who have this sheet in their defaultSheetProgress
//         //   const users = await User.find({'defaultSheetProgress': { $in: [sheetid] } });
//           const users = await User.find();
//         //   console.log(users);

    
//           for (const user of users) {
           
//             //   const updatedProgress = Array(numQuestions).fill(0); // Create an array of zeros of length numQuestions
//             //   console.log(user.defaultSheetProgress) 

//               for(const sh of defaultSheets){
//                 const { sheetid, Listquestion} = sh;
//                 console.log(user.defaultSheetProgress.get(String(sheetid)).progress);
                     
//                 if (user.defaultSheetProgress) {
//                     const updatedProgress = Array(Listquestion.length).fill(0);
//                     // Update the progress for this sheet
//                     user.defaultSheetProgress.get(String(sheetid)).progress = updatedProgress;
//                   }

//               }
              
      
//             // //   // Update the user's defaultSheetProgress
//             // //   user.defaultSheetProgress.set(sheetid, {
//             // //     progress: updatedProgress});
    
//               await user.save();
//               console.log(`Updated progress for user ${user.email} on sheet`);
//             }
//         //   }
//         // }
    
//         console.log('All user progress updated.');
//       } 
//     catch (error) {
//       console.error('Error updating users:', error);
//     } 
//   }

//   addDefaultSheetProgress();






//  routes import 
const problemsetQuestionList=require('./routes/ProblemLIst.routes');
const CreateUserRoute=require('./routes/Auth/CreateUser.routes');
const OtpVerificationRouter=require('./routes/Auth/OtpVerification.routes')
const LoginUserRoute=require('./routes/Auth/LoginUser.routes')
const Sheets=require('./routes/Sheets/AllSheet.routes');
const GetQuestionRouter=require('./routes/Sheets/GetQuesionWithID.routes');
const PrepareCompleteSheetUsingIdRouter=require('./routes/Sheets/PrepareCompleteSheetUsingId.routes');
const AddQuestionsIntoSheetsRouter=require('./routes/Sheets/AddQuestionToSheet.routes');
const GetAllQuestionsRoute=require('./routes/Sheets/GetAllQuestions.routes')
const ImageUploadedToCloudRouter=require('./routes/ImageUploadedToCloud.routes');
const TokenToUserData=require('./routes/Auth/TokenToUserData.routes');
const GetQuestionListBasedOnSheetRouter =require('./routes/Sheets/GetQuestionListBasedOnSheet.routes');
const GetQuestionListBasedOnUserSheetRouter=require('./routes/Sheets/GetQuestionListBasedOnUserSheet.routes');
const UpdatingprogressUserBasedRouter= require('./routes/Sheets/UpdatingprogressUserBased.routes');

// Define a sample route
app.get('/', (req, res) => {
       
       res.send("working ")
     
});

// user 
app.use('/api/user',CreateUserRoute);
app.use('/api/user',OtpVerificationRouter);
app.use('/api/user',LoginUserRoute);
app.use('/api/user',TokenToUserData);

//  updating user profile
app.use('/api/user-update-defaultsheet',UpdatingprogressUserBasedRouter);

// sheet 
app.use('/api/sheet',Sheets);
app.use('/api/sheet',PrepareCompleteSheetUsingIdRouter);
app.use('/api/sheet',AddQuestionsIntoSheetsRouter);
app.use('/api/sheet',ImageUploadedToCloudRouter);


//  question getting 

app.use('/api/question',GetQuestionRouter);
app.use('/api/question',GetAllQuestionsRoute);
app.use('/api/question',GetQuestionListBasedOnSheetRouter);
app.use('/api/question',GetQuestionListBasedOnUserSheetRouter);


// admin route only
app.use('/pro',problemsetQuestionList);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});