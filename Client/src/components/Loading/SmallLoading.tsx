
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

const SmallLoading:React.FC<{value:string}> = ({value}) => {
    const [delayfont,setDelay]=useState<Boolean>(false);

    const delay=async(ms:number)=>{

        await new Promise(resolve=>{
            setTimeout(resolve,ms);
        })

        setDelay(true);

    }
    useEffect(()=>{
        delay(1000);
    })
  
    return (
      <Box sx={{ width: "100%", height: "100%",overflow:'hidden',display:'flex',justifyContent:'center',alignItems:'center',gap:'20px',flexDirection:'column' }}>
        <CircularProgress size={48} />

        {delayfont &&
            <Typography variant="body2">{value}</Typography>
        }
      </Box>
    );
}
  export default SmallLoading;