import React,{useState, useEffect,useContext } from 'react'
import FetchInstance from '../../../fetchInstance/Fetch';
import { SnackbarContext } from "../../../context/SnackbarProvider";
import { QuestionDetail } from "../Dashboard";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Paper,
    Checkbox,
    Typography,
    LinearProgress,
    Link
  } from "@mui/material";
import { useParams } from 'react-router-dom';
import SmallLoading from '../../Loading/SmallLoading';




const UserSheetView:React.FC= () => {

    const [progress,setProgress]=useState<number>(0);
    const {sheetid}=useParams();
    const [ListQuestion, SetListQuestion] = useState<QuestionDetail[] | undefined>(undefined);

     
    const { openSnackbar } = useContext(SnackbarContext);
  //    question calling based on sheet id 
  const callingSheetData = async () => {
    openSnackbar("Sheet Data");
    try {
      const data = await FetchInstance("/api/question/get-sheet-question", {
        method: "POST",
        body: JSON.stringify({ sheetid: sheetid, sheetType: "USERSHEET" }),
      });
      // console.log(data);
      if (data) {
        SetListQuestion(data.questions);
        
         if(data.questions){

          const TotalMarks=data.questions.length;
          // console.log("ToTal Questions ",TotalMarks);
          const MyMarks=data.questions.reduce((acc:number,item:QuestionDetail) => acc + (item? (item.hasSolution ? 1 : 0):0),0);
          // console.log("MyMarks :",MyMarks);
      
          const percentageProgress=(MyMarks/TotalMarks)*100;
            setProgress(percentageProgress);
      
          }
      } else {
         openSnackbar("somthing Break in View sheets")
      }
    } catch (err) {
      console.log("error in view Page", err);
      openSnackbar("Server Side err")

    }
  };

   const OnSolved=()=>{
                
     alert("Working on this Part ");
   }

  useEffect(() => {
   
    callingSheetData();
    
  }, []);

   
  if (!ListQuestion ) {
    return (
      <>
       <SmallLoading value="Please referesh page Something"/>
      </>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ marginTop: "100px" }}>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableHead>
          <TableRow>
             <TableCell colSpan={7}>

              <LinearProgress variant="determinate" value={progress}  color={`${progress===100?"success":"primary"}`}/>

             </TableCell>

          </TableRow>
          <TableRow>
            <TableCell>S.no </TableCell>
            <TableCell align="center">Leet Code Question Number</TableCell>
            <TableCell align="center">Question Name </TableCell>
            <TableCell align="center">Difficulty Level</TableCell>
            <TableCell align="center">Main Topic</TableCell>
            <TableCell align="center">Problem Link </TableCell>
            <TableCell align="center"> Solved </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ListQuestion.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} align="center">
                <Typography variant="body2">
                  No Questions In this Sheet Yet, please Add
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            ListQuestion.map((item, index) => (
              <TableRow
                key={index}
                sx={{
                  border: 0,
                  backgroundColor: item.status ? "#D1FFBD" : "",
                }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{item.frontendQuestionId}</TableCell>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.difficulty}</TableCell>
                <TableCell align="center">
                  {item.topicTags.map((item, index2) => {
                    return (
                      <Typography variant="body2" key={index2}>
                        {" "}
                        {item.name}
                      </Typography>
                    );
                  })}{" "}
                </TableCell>
                <TableCell align="center">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Visit{" "}
                  </Link>{" "}
                </TableCell>
                <TableCell align="center">
                  
                  <Checkbox
                    checked={item.hasSolution}
                    onChange={OnSolved}
                    name={item.hasSolution ? "Solved" : "Unsolved"}
                  />
                </TableCell>
               
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserSheetView
