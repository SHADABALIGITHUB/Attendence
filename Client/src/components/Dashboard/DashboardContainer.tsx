import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import FetchInstance from '../../fetchInstance/Fetch';

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


     useEffect(()=>{

        const CallApi =async()=>{

          try{
            const response=await FetchInstance('/api/sheet/default',{
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
    <Box sx={{paddingTop:'100px'}}>

  <Typography component="h2" sx={{fontSize:'20px',fontWeight:'700',margin:'4px' , color:'#239ED0'}}>
  Default Sheets 
  </Typography>

 
 <Grid2 container component='main' spacing={3} sx={{display:'flex',justifyContent:'center',alignContent:'center'}}>

        
         {
            userSheet.length!=0?userSheet.map((item,index)=><SheetCard key={index} data={item}/>):<h2 style={{color:'primary'}}>No Sheet Yet</h2>
        }
          
                   
                   
               
           
        </Grid2>

    
    
  

   
         
       
 
    </Box>
  )
}


export default DashboardContainer
