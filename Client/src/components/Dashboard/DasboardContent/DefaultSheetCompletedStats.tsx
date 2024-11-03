import React from 'react'
import { useContext } from 'react';
import { DefaultSheetDataContext } from '../../../context/DefaultSheets';
import {Box} from '@mui/material';
import ProgresCard from './ProgresCard';
const DefaultSheetCompletedStats:React.FC = () => {
    const {DefaultSheetData}=useContext(DefaultSheetDataContext);
  return (
    <Box id="AllProgressContainer" sx={{display:'flex',justifyContent:'start',alignItems:"center",gap:"20px",flexWrap:'wrap',margin:'10px'}}>
         {
            DefaultSheetData.map((item,index)=>{

                 return <ProgresCard value={40} key={index} item={item} />

            })
         }

        
      
    </Box>
  )
}

export default DefaultSheetCompletedStats
