import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { deepOrange, green } from '@mui/material/colors';
import { Typography } from '@mui/material';

interface streak{
   currentStreak: number | undefined
   highestStreak: number | undefined,
}
const Streak:React.FC<streak> = ({currentStreak,highestStreak}) => {
  return (
    <Box  sx={{margin:'30px',borderRadius:'20px' ,display:'flex',flexDirection:"column",backgroundColor:'#edfbfe',gap:"10px",minWidth:'300px',minHeight:'300px',justifyContent:'center',alignItems:'center'}}>

       <Typography variant='body2' > Don't Break your  <span style={{color:'blueviolet'}}> Streak </span> just login daily </Typography>

     <Box sx={{margin:'1px',display:'flex',gap:"10px",justifyContent:'center',alignItems:'center'}}>


         
 <Stack direction="row" spacing={1} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Avatar sx={{ bgcolor: deepOrange[500]}} variant="circular">
        {currentStreak}
      </Avatar>
      <Typography variant='body2' sx={{color:'orange'}} > Current </Typography>

</Stack>
<Stack direction="row" spacing={1} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Avatar sx={{ bgcolor: green[500] }} variant="circular">
          {highestStreak}
      </Avatar>
      <Typography variant='body2'sx={{color:'green'}} > Longest </Typography>


</Stack>


        
           

       
     </Box>
        
    </Box>
    
  )
}

export default Streak