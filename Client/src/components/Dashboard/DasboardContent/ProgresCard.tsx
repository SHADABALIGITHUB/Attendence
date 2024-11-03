import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";
import { UserSheetType } from "../Dashboard";
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
        size="100px"
        thickness={5}
        sx={{
          color: "gray",
        }}
      />
      <Typography
        variant="body1"
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Shift both horizontally and vertically
            textAlign: 'center'
        }}
      >
        {inside}
      </Typography>

      <CircularProgress
        variant="determinate"
        size="100px"
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

const ProgresCard: React.FC<ProgressProps> = ({ value, item }) => {
  return (
    <Box
      sx={{
        width: "200px",
        height: "200px",
        backgroundColor: "",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CircularProgressWithLabel value={value} inside="40%" />
      <Typography variant="body1">{item.title} </Typography>
      
    </Box>
  );
};

export default ProgresCard;
