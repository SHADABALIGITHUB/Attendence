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


  
 
  
  return (
    <Box
      key={2}
      id="AllProgressContainer"
      sx={{
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        gap: {
          xs:"10px",
          sm:"20px"
        },
        flexWrap: "wrap",
        margin: {
          xs:"3px",
          sm:"10px"
        },
        borderRadius:'10px',
        '&:hover':{
        boxShadow:'1px 1px 100px #f7feff',
        }
        
      }}
    >
      {DefaultSheetData.map(
        (item) =>
          userData?.defaultSheetProgress &&
           
            <>
              {
              ProgressData&&<ProgresCard value={ProgressData[item.sheetid].progress} item={item} Key={parseInt(item._id)} />
              
              }
            </>
        
      )}

    
    </Box>
  );
};

export default DefaultSheetCompletedStats;
