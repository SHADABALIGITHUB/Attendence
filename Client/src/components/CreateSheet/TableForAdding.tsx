import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function createData(
  sno: number,
  questionNo: number,
  questionName:string,
  difficulty: string,
  topic: string[],
  status: boolean,
  review:boolean
) {
  return { sno,questionNo,questionName,difficulty,topic,status,review};
}

const rows = [
  createData(1, 159,' Two Sum you values ', "6.0", ["array","string"],false,true),
  createData(1, 237,' Two Sum you values ', "9.0", ["array","string"],  false,true),
  createData(1, 262,' Two Sum you values ', "6.0", ["array","string"], false,true),
  createData(1, 305,' Two Sum you values ', "3.7", ["array","string"],  false,true),
  createData(1, 356,' Two Sum you values ', "6.0", ["array","string"], false,true),
  createData(1, 356,' Two Sum you values ', "6.0", ["array","string"], false,true),
  createData(1, 356,' Two Sum you values ', "6.0", ["array","string"], false,true),
  createData(1, 356,' Two Sum you values ', "6.0", ["array","string"], false,true),
  createData(1, 356,' Two Sum you values ', "6.0", ["array","string"], false,true),
  createData(1, 356,' Two Sum you values ', "6.0", ["array","string"], false,true),
  createData(1, 356,' Two Sum you values ', "6.0", ["array","string"], false,true),
  createData(1, 356,' Two Sum you values ', "6.0", ["array","string"], false,true),
];


 const TableForAdding:React.FC=()=> {
  return (

    <>    
    <Box>

        <TextField label="Search ..Question" ></TextField>

        <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Easy" />
        <FormControlLabel control={<Checkbox />} label="Medium" />
        <FormControlLabel control={<Checkbox />} label="Hard" />
        </FormGroup>
        <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Array" />
        <FormControlLabel control={<Checkbox />} label="Linked List" />
        <FormControlLabel control={<Checkbox />} label="Stack" />
        <FormControlLabel control={<Checkbox />} label="Queue" />
        <FormControlLabel control={<Checkbox />} label="Two Pointers" />
        <FormControlLabel control={<Checkbox />} label="Sorting" />
        <FormControlLabel control={<Checkbox />} label="Backtracking" />
        <FormControlLabel control={<Checkbox />} label="Hash Table" />
        <FormControlLabel control={<Checkbox />} label="Trie" />
        <FormControlLabel control={<Checkbox />} label="Math" />
        <FormControlLabel control={<Checkbox />} label="Greedy" />
        <FormControlLabel control={<Checkbox />} label="Recursion" />
        <FormControlLabel control={<Checkbox />} label="Dynamic Programming" />
        <FormControlLabel control={<Checkbox />} label="Binary Search" />
        <FormControlLabel control={<Checkbox />} label="Divide and Conquer" />
        <FormControlLabel control={<Checkbox />} label="Sliding Window" />
        <FormControlLabel control={<Checkbox />} label="Matrix" />
        <FormControlLabel control={<Checkbox />} label="Divide and Conquer" />

       

        
        
        </FormGroup>




    </Box>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,marginTop:'100px' }} aria-label="simple table">
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
              <TableCell align="center">{row.topic.map((item)=><h2>{item}</h2>)}</TableCell>
              <TableCell align="center">{row.status?"Solved":"Unsolved"}</TableCell>
              <TableCell align="center">{row.review?"Review":""}</TableCell>
             
            
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>

  );
}

export default TableForAdding;