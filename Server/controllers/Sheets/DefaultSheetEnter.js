const {Sheets} =require('../../models/UserSheets/DefaultSheets');

const DefaultSheetEnter= async (req,res)=>{

      try{

        // const sheetId=req.body.sheetId;

    //   const check=await Sheets.findOne({})
      
      

      const response= await Sheets.create({
        
        Listquestion:[
          {
            questionid:7,
            questionName:"Reverse Integer",
          },
          {
            questionid:9,
            questionName:"Palindrome Number",
          },
          {
            questionid:125,
            questionName:"Valid Palindrome",
          },
          {
            questionid:509,
            questionName:"Fibonacci Number",
          }
        ],
        title:"Love Babbar Sheet ",
        userId:'shadab89@gmail.com', 

        

      });

      if(response){
        return res.status(201).json({ message: 'Added Question Completed', status: true });
      }


    }
    catch(err){


    console.log('Error:', err);
    return res.status(500).json({ message: 'Error Adding Question', status: false });


    }

  
  
     
       

      

         
      res.send("New Default Sheet Enter ");

}

module.exports=DefaultSheetEnter;