const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors=require('cors');

const usersheetInprogressBar=require('./services/userSheet/ProgressBarupdate')
const app = express();

//  cors allow all  while in dev phase 
app.use(cors('*'));
app.use(express.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


//  mongo db connect
const mongooseConnect = require('./config/database');
mongooseConnect();

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
const UpdatingprogressUserSheetRouter=require('./routes/Sheets/UpdatingprogressUserSheet.routes')
const forgetPasswordRoute=require('./routes/Auth/forgetPassword.routes');
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
app.use('/api/user-update-usersheet',UpdatingprogressUserSheetRouter);

// forgetpassword login

app.use('/api/forget-password',forgetPasswordRoute);

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