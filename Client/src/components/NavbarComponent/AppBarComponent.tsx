import React,{useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import RoutesInNavbar from "./RoutesInNavbar";

const AppBarComponent:React.FC = () => {
  
  
    const [mobile,setMobile]=useState<'none'|'flex'>('none');
 
 
  const openCloseDropDown=()=>{
    setMobile((prev)=>prev==='flex'?'none':'flex');
  }

  

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#cceeff",
          color: "black",
          zIndex: 20,
          display: "flex",
          width:'100%'
        }}
      >
        <Toolbar>
          <Box sx={{ display: "flex",gap: "30px", cursor: "pointer",width:"100%",justifyContent:'space-between'}}>

            <img
              src="https://res.cloudinary.com/ddnum51yo/image/upload/v1729440679/LeetCode/logo.png"
              alt="Logo"
              style={{ width: "40px", height: "40px", marginRight: "6px" }} // Adjust size and spacing
            />

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={openCloseDropDown}
              edge="start"
              sx={{ marginRight: 5, display: { xs: "", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
  
            <RoutesInNavbar openCloseDropDown={setMobile} mobile={mobile}/>
           
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarComponent;
