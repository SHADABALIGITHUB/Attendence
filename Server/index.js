const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors=require('cors');


const app = express();
app.use(cors('*'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const mongooseConnect = require('./config/database');
mongooseConnect();






//  routes 
const problemsetQuestionList=require('./routes/ProblemLIst.routes');
const CreateUserRoute=require('./routes/Auth/CreateUser.routes');
const OtpVerificationRouter=require('./routes/Auth/OtpVerification.routes')
const LoginUserRoute=require('./routes/Auth/LoginUser.routes')
const DefaultSheet=require('./routes/Sheets/DefaultSheet.routes');
const GetQuestionRouter=require('./routes/Sheets/GetQuesionWithID.routes');




// Define a sample route
app.get('/', (req, res) => {
       
       res.send("working ")
     
});
// user 
app.use('/api/user',CreateUserRoute);
app.use('/api/user',OtpVerificationRouter);
app.use('/api/user',LoginUserRoute)

// sheet 

app.use('/api/sheet',DefaultSheet);



//  question getting 

app.use('/api/question',GetQuestionRouter);

// admin route only
app.use('/pro',problemsetQuestionList);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});