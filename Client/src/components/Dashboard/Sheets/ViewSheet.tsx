import React from 'react'
import { useLocation } from 'react-router-dom'
import {QuestionDetail} from '../DashboardContainer';
import { TableContainer,Table,TableHead,TableBody,TableCell,TableRow,Paper } from '@mui/material';
const ViewSheet:React.FC = () => {

     const location=useLocation();
     const ListQuestion:QuestionDetail[]=location.state?.Listquestion;

    //  useEffect(()=>{

         
         
         

    //  },[])
    
  
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>S.no </TableCell>
          <TableCell align="center">Leet Code Question Number</TableCell>
          <TableCell align="center">Question Name </TableCell>
          <TableCell align="center">Difficulty Level</TableCell>
          <TableCell align="center">Main Topic</TableCell>
          <TableCell align="center"> Solved </TableCell>
          <TableCell align="center"> Review  </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ListQuestion.map((item,index) => (
          <TableRow
            key={index}
            sx={{ border: 0  }}
          >
            <TableCell align="center">{index+1}</TableCell>
            <TableCell align="center">{item.questionid}</TableCell>
            <TableCell align="center">{item.questionName}</TableCell>
            <TableCell align="center">Medium </TableCell>
            <TableCell align="center">Array</TableCell>
            <TableCell align="center">{false?"Solved":"Unsolved"}</TableCell>
            <TableCell align="center">{false?"Review":"Unreview"}</TableCell>
           
          
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}


export default ViewSheet
