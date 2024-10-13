
 import React,{useContext} from 'react'
 import AppBar from '@mui/material/AppBar';
 import Toolbar from '@mui/material/Toolbar';
 import Typography from '@mui/material/Typography';
 import Box from '@mui/material/Box';
 import MenuIcon from '@mui/icons-material/Menu';
 import IconButton from '@mui/material/IconButton';
 import { useNavigate } from 'react-router-dom';
 import { currentPageStateContext } from "../../context/CurrentPageState";



 const AppBarComponent = ({setOpen}:{setOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
     const naviagte=useNavigate();

     const {setCurrentState}=useContext(currentPageStateContext);
     
   return (
     <AppBar position="fixed" sx={{ zIndex: 20 }}>
<Toolbar>
<IconButton
  color="inherit"
  aria-label="open drawer"
  onClick={()=>{setOpen(prev=>!prev)}}
  edge="start"
  sx={{ marginRight: 5 }}
>
  <MenuIcon />
</IconButton>
<Box sx={{display:'flex',gap:'30px',cursor:'pointer'}}>
<Typography variant="h6" noWrap onClick={()=>{setCurrentState("Dashboard"); naviagte('/dashboard')}}>
  Dashboard
</Typography>
<Typography variant="h6" noWrap sx={{':hover':{color:'#E2DFD2'}}} onClick={()=>{setCurrentState("CreateSheet"); naviagte('/create-sheet'); }}>
   Create New Sheet
</Typography>

<Typography variant="h6" noWrap sx={{':hover':{color:'#E2DFD2'}}} onClick={()=>{setCurrentState("DefaultSheet"); naviagte('/dashboard'); }}>
   Default Sheets
</Typography>

<Typography variant="h6" noWrap sx={{':hover':{color:'#E2DFD2'}}} onClick={()=>{setCurrentState("UserSheet"); naviagte('/dashboard');}}>
   My Sheets
</Typography>
</Box>
</Toolbar>
</AppBar>
   )
 }
 
 export default AppBarComponent
 