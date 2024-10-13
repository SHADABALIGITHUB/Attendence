const mongoose=require('mongoose');
const { Question } = require('../Problems/Leetcodeproblem');
const AutoIncrement=require('mongoose-sequence')(mongoose);

const Question_Sheet=new mongoose.Schema({
     questionid:Number,
     questionName:String,
    
})

const CollectionSheet=new mongoose.Schema({
    Listquestion:[Question_Sheet],
    title: {
        type: String,
        required: true,
     },
     sheetid:{
        type:Number,
        unique:true,
       },
     createdAt: {
        type: Date,
        default: Date.now,
     },
     userId:String,
     sheetImg:String,
})

CollectionSheet.plugin(AutoIncrement, { inc_field: 'sheetid' });

const Sheets=mongoose.model('DefaultSheets',CollectionSheet);
const UserSheets=mongoose.model('UserSheets',CollectionSheet);


module.exports={Sheets,UserSheets};