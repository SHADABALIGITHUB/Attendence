const {Question} =require('../../models/Problems/Leetcodeproblem')

const GetAllQuestion= async (req,res)=>{

    const { page = 1, limit = 10 } = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
    };

    try{
        const Sheets= await Question.find()
        .skip((options.page-1)*options.limit)
        .limit(options.limit);

        const totalDocuments=await Question.countDocuments();

        res.status(201).json({
              status:true,
              totalDocuments,
              totalPages:Math.ceil(totalDocuments/options.limit),
              currentPage:options.page,
              data:Sheets,
        })

    }
    catch(err){
        res.status(500).json({ message: 'Error fetching All Questions', err });
    }

  
   
}

module.exports=GetAllQuestion;