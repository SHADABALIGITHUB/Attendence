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
// const {Sheets}=require('./models/UserSheets/DefaultSheets');

// async function addDefaultSheetProgress() {
//     try {
//       const DefaultSheets= await Sheets.find({},'sheetid');
//     //    console.log(DefaultSheets);

//       const defaultProgress = {};
//       DefaultSheets.forEach(sheet => {
//         defaultProgress[sheet.sheetid] = { progress: 0, lastUpdated: new Date() };
//       });

//     //   const result = await User.find();

//     //   console.log(result[0].defaultSheetProgress);
    
       
//       const result = await User.updateMany(
       
//         { $set: { defaultSheetProgress: defaultProgress } }        // Set the field to an empty object
//       );
//       console.log(result[0].defaultSheetProgress);
  
//       console.log(`Updated users to add defaultSheetProgress.`);
//     } catch (error) {
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

// Define a sample route
app.get('/', (req, res) => {
       
       res.send("working ")
     
});

// user 
app.use('/api/user',CreateUserRoute);
app.use('/api/user',OtpVerificationRouter);
app.use('/api/user',LoginUserRoute);
app.use('/api/user',TokenToUserData);

// sheet 
app.use('/api/sheet',Sheets);
app.use('/api/sheet',PrepareCompleteSheetUsingIdRouter);
app.use('/api/sheet',AddQuestionsIntoSheetsRouter);
app.use('/api/sheet',ImageUploadedToCloudRouter);


//  question getting 

app.use('/api/question',GetQuestionRouter);
app.use('/api/question',GetAllQuestionsRoute);


// admin route only
app.use('/pro',problemsetQuestionList);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});