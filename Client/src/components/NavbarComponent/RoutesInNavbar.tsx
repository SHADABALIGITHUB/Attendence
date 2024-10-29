import React from 'react'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import Box from '@mui/material/Box';
import FaceIcon from "@mui/icons-material/Face";
import GridViewIcon from "@mui/icons-material/GridView";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import { currentPageStateContext } from "../../context/CurrentPageState";
import { Theme } from "@mui/material/styles";
import { useContext ,useState} from 'react';
import { useNavigate } from "react-router-dom";
import { AuthStatus } from "../../context/Auth";


interface RoutesPropsTypes{
    openCloseDropDown:React.Dispatch<React.SetStateAction<'flex'|'none'>>;
    mobile:'none'|'flex',
}

const RoutesInNavbar:React.FC<RoutesPropsTypes> = ({openCloseDropDown,mobile}) => {
    const navigate = useNavigate();
  
    const { setAuthStatus } = useContext(AuthStatus);
    const { setCurrentState } = useContext(currentPageStateContext);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const theme = useTheme<Theme>();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));



   
  

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setAuthStatus(false);
    navigate("/auth");
    handleClose();
  };
  return (
    <Box
    
    sx={{
        position: {xs: "fixed",md: "static"},
        backgroundColor: { xs: "white", md:"inherit"},
        bottom: { xs: "0", md: "" },
        left: { xs: "0", md: "" },
        display:{xs:`${mobile}`,md:"flex"},
        flexGrow:1,
        flexDirection: { xs: "column", md: "row" },
        textAlign: "center",
        justifyContent: "start",
        width: { xs: "100vw", md: "" },
        height: { xs: "93vh", md: "" },
        gap: {xs:"50px",md:"20px"},
        transition: 'all 0.7s ease',
        
      
    }}
    
  >
    <Fab
      variant="extended"
      sx={{
        marginTop:{xs:'100px',md:'0px'},
        backgroundColor: "transparent",
        boxShadow: "none",
        ":hover": { color: "#0088cc" },
      }}
      size="medium"
      onClick={() => {
        setCurrentState("Dashboard");
        navigate("/dashboard");
        openCloseDropDown('none');
      }}
    >
      <GridViewIcon sx={{ mr: 1 }} />
      <Typography variant="body1" noWrap>
        Dashboard
      </Typography>
    </Fab>
    <Fab
      variant="extended"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        ":hover": { color: "#0088cc" },
      }}
      size="medium"
      onClick={() => {
        setCurrentState("CreateSheet");
        navigate("/create-sheet");
        openCloseDropDown('none');
        
      }}
    >
      <AddCircleIcon sx={{ mr: 1 }} />
      <Typography variant="body1" noWrap>
        Create New Sheet
      </Typography>
    </Fab>
    <Fab
      variant="extended"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        ":hover": { color: "#0088cc" },
      }}
      size="medium"
      onClick={() => {
        setCurrentState("DefaultSheet");
        navigate("/dashboard");
        openCloseDropDown('none');
      }}
    >
      <AutoFixHighIcon sx={{ mr: 1 }} />
      <Typography variant="body1" noWrap>
        Default Sheets
      </Typography>
    </Fab>
    <Fab
      variant="extended"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        ":hover": { color: "#0088cc" },
      }}
      size="medium"
      onClick={() => {
        setCurrentState("UserSheet");
        navigate("/dashboard");
        openCloseDropDown('none');
      }}
    >
      <SensorOccupiedIcon sx={{ mr: 1 }} />
      <Typography variant="body1" noWrap>
        My Sheets
      </Typography>
    </Fab>

    {localStorage.getItem("email") ===
      import.meta.env.VITE_ADMIN_EMAIL && (
      <Fab
        variant="extended"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          ":hover": { color: "#0088cc" },
        }}
        size="medium"
        onClick={() => {
          setCurrentState("Admin");
          navigate("/admin-create-sheet");
          openCloseDropDown('none');
        }}
      >
        <AdminPanelSettingsIcon sx={{ mr: 1 }} />
        <Typography variant="body1" noWrap>
          Admin
        </Typography>
      </Fab>
    )}

    {!isLargeScreen && 
     <Fab
        variant="extended"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          ":hover": { color: "#0088cc" },
        }}
        size="medium"
     >
    
    <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Fab>
    }
          
        
    
   

    {isLargeScreen && (

    <Box
      sx={{
         
        position:"relative",
        right: '10px',
        marginLeft:{xl:'500px',md:'80px'},
       
        }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#0088cc",
          maxWidth: "300px",
          minWidth: "50px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
        onClick={handleProfileClick}
      >
        <FaceIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          position: "absolute",
          top: "40px",
          right: "0",
        }} 
      >
        <MenuItem disabled>
          <Typography variant="body1">
            {localStorage.getItem("email")}
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box> 
    )
    }
   </Box>
  )
}

export default RoutesInNavbar
