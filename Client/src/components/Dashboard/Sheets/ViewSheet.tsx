import React from 'react'
import { useLocation } from 'react-router-dom'
import {QuestionDetail} from '../Dashboard';
import { TableContainer,Table,TableHead,TableBody,TableCell,TableRow,Paper } from '@mui/material';
import { Typography } from '@mui/material';
import {Link} from '@mui/material';
const ViewSheet:React.FC = () => {

     const location=useLocation();
     const ListQuestion:QuestionDetail[]=location.state?.Listquestion;

     
    
    
  
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
          <TableCell align="center">Problem Link </TableCell>
          <TableCell align="center"> Solved </TableCell>
          <TableCell align="center"> Review  </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {ListQuestion.length === 0 ? (
    <TableRow>
      <TableCell colSpan={7} align="center">
        <Typography variant="body2">No Questions In this Sheet Yet, please Add</Typography>
      </TableCell>
    </TableRow>
  ) : (
    ListQuestion.map((item, index) => (
      <TableRow key={index} sx={{ border: 0 ,backgroundColor:item.status?'#D1FFBD':''}}>
        <TableCell align="center">{index + 1}</TableCell>
        <TableCell align="center">{item.frontendQuestionId}</TableCell>
        <TableCell align="center">{item.title}</TableCell>
        <TableCell align="center">{item.difficulty}</TableCell>
        <TableCell align="center">{ item.topicTags.map((item,index2)=>{return <Typography variant='body2' key={index2}> {item.name}</Typography>}) } </TableCell>
        <TableCell align="center"><Link href={item.link} target="_blank" rel="noopener noreferrer" > Visit </Link>  </TableCell>
        <TableCell align="center">{false ? "Solved" : "Unsolved"}</TableCell>
        <TableCell align="center">{false ? "Review" : "Unreview"}</TableCell>
      </TableRow>
    ))
  )}
      </TableBody>
    </Table>
  </TableContainer>
  )
}


export default ViewSheet
