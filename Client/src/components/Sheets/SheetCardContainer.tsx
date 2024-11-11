import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SheetCard from './SheetCard';
import {UserSheetType} from '../Dashboard/Dashboard';


interface  SheetFormateType{
    UserSheetsData:UserSheetType[];
    SheetType:string;

}

const SheetCardViewInDashboard:React.FC<SheetFormateType> = ({UserSheetsData,SheetType}) => {
    
  return (
          

<TableContainer component={Paper} sx={{marginTop:'100px',width:'100%'}}>

<Table aria-label="simple table">
<TableHead>
      <TableRow>
        <TableCell align="center"> {SheetType} </TableCell>
        
      </TableRow>
    </TableHead>

  <TableBody>
     
      <TableRow  sx={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
        <TableCell sx={{display:'flex',flexWrap:'wrap',gap:'15px',justifyContent:'center'}}>
        {
        UserSheetsData.length!=0?UserSheetsData.map((item,index)=><SheetCard SheetType={SheetType} key={index} data={item}/>):<h2 style={{color:'primary'}}>No Sheet Yet</h2>

        }   

        </TableCell>
       
      </TableRow>
  </TableBody>



</Table>

</TableContainer>
  )
}

export default SheetCardViewInDashboard