const mongoose=require('mongoose');



const topicTagSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  });


const Question_Schema= new mongoose.Schema({
    
"acRate": String,
"difficulty": {
    type:String,
    enum:["Hard","Medium","Easy"],

},
"freqBar": {
    type: String,
    default: null,
},
"frontendQuestionId": {
    
    type:Number,
    unique:true,
    required:true,
},
"isFavor": {
    type: Boolean,
    default: false
},
"paidOnly":{
    type: Boolean,
    default: false
},
"status": {
    type: String,
    default: null,
},
"title": String,
"titleSlug": String,
"link":{
    type:String,
    default:null,
 },
"topicTags": [topicTagSchema],
"hasSolution": {
    type: Boolean,
    default: false
},
"hasVideoSolution": {
    type: Boolean,
    default: false
}
})

const Question=mongoose.model('QuestionsList',Question_Schema);


module.exports=Question;