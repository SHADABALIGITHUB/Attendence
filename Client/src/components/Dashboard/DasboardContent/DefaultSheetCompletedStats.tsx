import React from "react";
import { useContext } from "react";
import { DefaultSheetDataContext } from "../../../context/DefaultSheets";
import { AuthStatus } from "../../../context/Auth";
import { Box } from "@mui/material";
import ProgresCard from "./ProgresCard";
const DefaultSheetCompletedStats: React.FC = () => {
  const { DefaultSheetData } = useContext(DefaultSheetDataContext);
  const { userData } = useContext(AuthStatus);
  const ProgressData= userData?.defaultSheetProgress;
  // console.log(ProgressData);

  const getProgressPercentage = (progressArray:number[]) => {
    const total = progressArray.length;
    const completed = progressArray.reduce((acc, item) => acc + item, 0);
    return total ? (Math.floor((completed / total) * 100)): 0; // Return 0 if the array is empty
  };

  
 
  
  return (
    <Box
      id="AllProgressContainer"
      sx={{
         width:{
           xs:'100vw',
           sm:'100%'
         },
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        gap: {
          xs:"10px",
          sm:"20px"
        },
        padding:{
          xs:'40px',
          md:'0px',
          
        },
        flexWrap: "wrap",
        margin: {
          xs:"10px",
          sm:"10px"
        },
        borderRadius:'10px',
        '&:hover':{
        boxShadow:'1px 1px 100px #f7feff',
        }
        
      }}
    >
     {ProgressData && DefaultSheetData.map((item) =>{
         const progress = ProgressData[item.sheetid]?.progress;
         if (!progress) return null;
            
         const percentage = getProgressPercentage(progress);
            
              {
               return (<ProgresCard key={item._id} value={percentage} item={item}/> );
              
              }
           
        
       })}

    
    </Box>
  );
};

export default DefaultSheetCompletedStats;
