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
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FetchInstance from '../../fetchInstance/Fetch';




 interface topicTagSchema{
    name: string,
    id:string,
    slug:string,
  };


interface Question_Sheet{
_id: string,  
acRate: string,
difficulty:"Hard"|"Medium"|"Easy",
freqBar:string,
frontendQuestionId:number,
isFavor: boolean,
paidOnly: boolean,
status: string,
title: string,
titleSlug: string,
link:string,
topicTags: topicTagSchema[],
hasSolution: boolean,
hasVideoSolution: boolean,
}







 const TableForAdding:React.FC=()=> {

    const [page,setPage]=React.useState('1');
    const limit=10
    const[rows,setRows]=React.useState<Question_Sheet[]|null>(null);


    


    React.useEffect(()=>{


      const GetQuestionData= async ()=>{

        try{
            const QuestionData=await FetchInstance(`/api/question/list?page=${page}&limit=${limit}`,{
              method:'GET',
             })

            if(QuestionData.status){

                setRows(QuestionData.data);
                 
            }

        }
        catch(err){

            console.log(err);

        }
      }

      GetQuestionData();

       

    },[page])



  return (

    <Box sx={{marginTop:'100px', display:'flex',gap:'10px'}}> 
   
    <Box sx={{display:'flex',flexDirection:'column'}}>

        <TextField label="Search ..Question" ></TextField>

        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked/>} label="All" />
        <FormControlLabel control={<Checkbox />} label="Easy" />
        <FormControlLabel control={<Checkbox />} label="Medium" />
        <FormControlLabel control={<Checkbox />} label="Hard" />
        </FormGroup>
        <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Array" />
        <FormControlLabel control={<Checkbox />} label="String" />
        <FormControlLabel control={<Checkbox />} label="Linked List" />
        <FormControlLabel control={<Checkbox />} label="Stack" />
        <FormControlLabel control={<Checkbox />} label="Queue" />
        <FormControlLabel control={<Checkbox />} label="Two Pointers" />
        <FormControlLabel control={<Checkbox />} label="Sorting" />
        <FormControlLabel control={<Checkbox />} label="Bit Manipulation" />
        
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
        <FormControlLabel control={<Checkbox />} label="Heap (Priority Queue)" />
        <FormControlLabel control={<Checkbox />} label="Tree" />
        <FormControlLabel control={<Checkbox />} label="Graph" />
        <FormControlLabel control={<Checkbox />} label="Binary Tree" />
        
        
        

       

        
        
        </FormGroup>




    </Box>
      
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.no </TableCell>
            
            <TableCell align="left">Question Name </TableCell>
            <TableCell align="left">Difficulty Level</TableCell>
            <TableCell align="left">Leet Code Question Number</TableCell>
            <TableCell align="left">Main Topic</TableCell>
            <TableCell align="left"> Leetcode Link</TableCell>
            <TableCell align="left"> Add to Sheet </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row,index) => (
            <TableRow
              key={index}
              sx={{ border: 0  }}
            >
              <TableCell sx={{minHeight:'100px'}}  align="left">{index+1}</TableCell>
              
              <TableCell sx={{minHeight:'100px'}}  align="left">{row.title}</TableCell>
              <TableCell sx={{minHeight:'100px'}}  align="left">{row.difficulty}</TableCell>
              <TableCell sx={{minHeight:'100px'}}  align="left">{row.frontendQuestionId}</TableCell>
              <TableCell   sx={{display:'flex',flexDirection:'column',gap:'2px',minHeight:'100px'}} align="left">

                {row.topicTags?.map((item,index)=><Typography key={index+1} variant='body2'> &#10039; {item.name}</Typography>)}
              </TableCell>
              <TableCell sx={{minHeight:'100px'}}  align="left">
                <Link href={row.link} target="_blank" rel="noopener noreferrer">
                Visit
              </Link> 
             </TableCell>
              <TableCell sx={{minHeight:'100px'}}> <Button>Add </Button> </TableCell>
             
            
             
            </TableRow>
          ))}
           <TableRow>
           <TableCell colSpan={6} align="left"> 
                           
                            <Button onClick={() => setPage(prev => prev=='1'?prev:String(parseInt(prev) - 1))}>Prev Page</Button>
                            <Button onClick={() => setPage(prev => String(parseInt(prev) + 1))}>Next Page</Button>
           </TableCell>
           </TableRow>
        </TableBody>
      </Table>
      
    </TableContainer>

    </Box>

  );
}

export default TableForAdding;