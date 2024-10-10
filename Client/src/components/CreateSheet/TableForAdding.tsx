import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  sno: number,
  questionNo: number,
  questionName:string,
  difficulty: number,
  topic: number,
  status: boolean,
  review:boolean
) {
  return { sno,questionNo,questionName,difficulty,topic,status,review};
}

const rows = [
  createData(1, 159,' Two Sum you values ',6.0, 24,  false,true),
  createData(1, 237,' Two Sum you values ',9.0, 37,  false,true),
  createData(1, 262,' Two Sum you values ',16.0, 24, false,true),
  createData(1, 305,' Two Sum you values ',3.7, 67,  false,true),
  createData(1, 356,' Two Sum you values ',16.0, 49, false,true),
  createData(1, 356,' Two Sum you values ',16.0, 49, false,true),
  createData(1, 356,' Two Sum you values ',16.0, 49, false,true),
  createData(1, 356,' Two Sum you values ',16.0, 49, false,true),
  createData(1, 356,' Two Sum you values ',16.0, 49, false,true),
  createData(1, 356,' Two Sum you values ',16.0, 49, false,true),
  createData(1, 356,' Two Sum you values ',16.0, 49, false,true),
  createData(1, 356,' Two Sum you values ',16.0, 49, false,true),
];

 const TableForAdding:React.FC=()=> {
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
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ border: 0  }}
            >
              <TableCell align="center">{row.sno}</TableCell>
              <TableCell align="center">{row.questionNo}</TableCell>
              <TableCell align="center">{row.questionName}</TableCell>
              <TableCell align="center">{row.difficulty}</TableCell>
              <TableCell align="center">{row.topic}</TableCell>
              <TableCell align="center">{row.status?"Solved":"Unsolved"}</TableCell>
              <TableCell align="center">{row.review?"Review":""}</TableCell>
             
            
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableForAdding;