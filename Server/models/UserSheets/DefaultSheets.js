const mongoose=require('mongoose');
const AutoIncrement=require('mongoose-sequence')(mongoose);
const {Question_Schema}=require('../Problems/Leetcodeproblem')

const CollectionSheet=new mongoose.Schema({
    Listquestion:[Question_Schema],
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