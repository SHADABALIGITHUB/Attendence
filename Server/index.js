const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const mongooseConnect = require('./config/database');
mongooseConnect();






//  routes 
const problemsetQuestionList=require('./routes/ProblemLIst.routes');






// Define a sample route
app.get('/', (req, res) => {
       
       res.send("working ")
     
});
app.use('/pro',problemsetQuestionList);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});