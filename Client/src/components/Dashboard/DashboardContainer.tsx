import React from 'react'
import { Box } from '@mui/material'
import Grid2 from '@mui/material/Grid2'

import SheetCard from './SheetCard';

const DashboardContainer:React.FC = () => {

    const userSheet:string[]=[];
  return (
    <Box sx={{paddingTop:'100px'}}>
 
 <Grid2 container component='main' spacing={3} sx={{display:'flex',justifyContent:'center',alignContent:'center'}}>


         {
            userSheet.length!=0?userSheet.map((index)=><SheetCard key={index}/>):<h2 style={{color:'primary'}}>No Sheet Yet</h2>
        }
          
                   
                   
               
           
        </Grid2>

    
    
  

   
         
       
 
    </Box>
  )
}


export default DashboardContainer
