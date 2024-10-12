import React, { useEffect, useState,useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




import FetchInstance from '../../fetchInstance/Fetch';
import { UserSheetsDataContext } from '../../context/UserSheets';


import SheetCard from './SheetCard';

export interface QuestionDetail{
          questionid: number,
          questionName:string,
          _id:string
}

export interface UserSheetType{
  _id: string,
  Listquestion: QuestionDetail[],
  title: string,
  userId: string,
  createdAt: string,
  sheetid: number,
}

const DashboardContainer:React.FC = () => {

    const [userSheet,SetUserSheet]=useState<UserSheetType[]>([]);
    const {UserSheetsData}=useContext(UserSheetsDataContext);
    



     useEffect(()=>{

        const CallApi =async()=>{

          try{
            const response=await FetchInstance(`/api/sheet/default/shadab89@gmail.com`,{
              method:"GET"
            })

            if(response.status){

                SetUserSheet(response.data);
                

            }
            else{

               console.log("somthing Wrong ");

            }

          }
          catch(err){

              console.log("Err 501 server issue",err);

          }

        }

        CallApi();

        
        
       

     },[])




  return (



    <TableContainer component={Paper} sx={{marginTop:'100px',width:'100%'}}>

    <Table aria-label="simple table">
    <TableHead>
          <TableRow>
            <TableCell align="center"> Default Sheets </TableCell>
            <TableCell align="center"> My Sheets </TableCell>
          </TableRow>
        </TableHead>

      <TableBody>
          <TableRow>
            <TableCell sx={{display:'flex',flexWrap:'wrap',gap:'15px'}}>
            {
   userSheet.length!=0?userSheet.map((item,index)=><SheetCard key={index} data={item}/>):<h2 style={{color:'primary'}}>No Sheet Yet</h2>
         }

            </TableCell>
            <TableCell>
            {
            UserSheetsData.length!=0?UserSheetsData.map((item,index)=><SheetCard key={index} data={item}/>):<h2 style={{color:'primary'}}>No Sheet Yet</h2>
 
          }   

            </TableCell>

          


          </TableRow>
      </TableBody>



    </Table>
    
   </TableContainer>
  )
}


export default DashboardContainer
