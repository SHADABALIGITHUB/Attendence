import React from "react";
import { CircularProgress, Box, Typography, Button } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { UserSheetType } from "../Dashboard";
import { useNavigate } from "react-router-dom";
interface ProgressProps {
  value: number;
  item: UserSheetType;
 
}
const CircularProgressWithLabel = ({
  value,
  inside,
}: {
  value: number;
  inside: string;
}) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={100}
        size="120px"
        thickness={5}
        sx={{
          color: "gray",
        }}
      />
      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Shift both horizontally and vertically
          textAlign: "center",
          color: "green",
          fontWeight: "900",
        }}
      >
        {inside}
      </Typography>

      <CircularProgress
        variant="determinate"
        size="120px"
        color="success"
        thickness={5}
        value={value}
        sx={{
          position: "absolute",
          left: 0,
          color: "green",
        }}
      />
    </Box>
  );
};

const ProgresCard: React.FC<ProgressProps> = ({ value, item}) => {
  const navigate=useNavigate();
    // console.log(value);
  const DirectToSheetView=(sheetid:number)=>{
      
      navigate(`/view-default/${sheetid}`)
  }
  return (
    <Box
     
      sx={{
        width: "250px",
        height: "250px",
        margin: "8px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        cursor:'pointer',
        gap:'10px',
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)", // Slightly enlarge on hover
          boxShadow: 8, // Increase shadow on hover
        },
        backgroundColor: "#f7feff", // Use theme background color
        border: "1px solid", // Add a border
        borderColor: "divider",
      }}
    >
      <CircularProgressWithLabel value={value} inside={`${value}%`} />
      <Typography variant="body1" sx={{fontFamily:'fantasy',fontWeight:'900',fontSize:'16px',}}>
        {item.title.length>24? item.title.slice(0,24)+'...':item.title}
      </Typography>
      <Button  variant="outlined" endIcon={<TrendingFlatIcon />}  onClick={()=>{DirectToSheetView(item.sheetid)}}> Begin </Button>
    </Box>
  );
};

export default ProgresCard;
