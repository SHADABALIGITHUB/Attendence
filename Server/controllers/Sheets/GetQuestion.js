const {Question} =require('../../models/Problems/Leetcodeproblem')

const GetQuestion= async (req,res)=>{

   

        try {
          const questionId = parseInt(req.params.id);
          const question = await Question.findOne({ frontendQuestionId: questionId });
      
          if (!question) {
            return res.status(404).json({ message: 'Question not found' });
          }
      
          res.json(question);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
   
}

module.exports=GetQuestion;