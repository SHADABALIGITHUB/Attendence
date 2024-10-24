import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { currentPageStateContext } from "../../context/CurrentPageState";
import FaceIcon from '@mui/icons-material/Face';
import { Menu, MenuItem } from '@mui/material';
import { AuthStatus } from '../../context/Auth';
import Fab from '@mui/material/Fab';
import GridViewIcon from '@mui/icons-material/GridView';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const AppBarComponent = () => {
    const navigate = useNavigate();
    const { setCurrentState } = useContext(currentPageStateContext);
    const {setAuthStatus}=useContext(AuthStatus);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
      localStorage.removeItem('token'); localStorage.removeItem('email'); setAuthStatus(false); navigate('/auth');
        handleClose();
    };

    return (
        <>
            <AppBar position="fixed" sx={{backgroundColor:'#cceeff',color:'black', zIndex: 20, display: "flex" }}>
                <Toolbar>
                    {/* <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(prev => !prev)}  
                        edge="start"
                        sx={{ marginRight: 5 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Box sx={{ display: 'flex', gap: '30px', cursor: 'pointer' }}>
                    <img
                        
                        src="https://res.cloudinary.com/ddnum51yo/image/upload/v1729440679/LeetCode/logo.png"
                        alt="Logo"
                        style={{ width: '40px', height: '40px', marginRight: '6px'}} // Adjust size and spacing
                    />
                       
                        <Fab variant="extended" sx={{backgroundColor:'transparent',boxShadow:'none',':hover':{color:'#0088cc'}}}  size="medium" onClick={() => { setCurrentState("Dashboard"); navigate('/dashboard'); }}>
                           <GridViewIcon sx={{mr:1}}/>
                           <Typography variant="body1" noWrap>
                            Dashboard
                           </Typography>
                        </Fab>
                        <Fab variant="extended" sx={{backgroundColor:'transparent',boxShadow:'none',':hover':{color:'#0088cc'}}} size="medium" onClick={() => { setCurrentState("CreateSheet"); navigate('/create-sheet'); }}>
                           <AddCircleIcon sx={{mr:1}}/>
                           <Typography variant="body1" noWrap>
                           Create New Sheet
                           </Typography>
                        </Fab>
                        <Fab variant="extended" sx={{backgroundColor:'transparent',boxShadow:'none',':hover':{color:'#0088cc'}}} size="medium" onClick={() => { setCurrentState("DefaultSheet"); navigate('/dashboard'); }}>
                           <AutoFixHighIcon sx={{mr:1}}/>
                           <Typography variant="body1" noWrap>
                           Default Sheets
                           </Typography>
                        </Fab>
                        <Fab variant="extended" sx={{backgroundColor:'transparent',boxShadow:'none',':hover':{color:'#0088cc'}}} size="medium" onClick={() => { setCurrentState("UserSheet"); navigate('/dashboard'); }}>
                           <SensorOccupiedIcon  sx={{mr:1}}/>
                           <Typography variant="body1" noWrap>
                           My Sheets
                           </Typography>
                        </Fab>


                       {localStorage.getItem('email')===import.meta.env.VITE_ADMIN_EMAIL && <Fab variant="extended" sx={{backgroundColor:'transparent',boxShadow:'none',':hover':{color:'#0088cc'}}}  size="medium" onClick={() => { setCurrentState("Admin"); navigate('/admin-create-sheet'); }}>
                           <AdminPanelSettingsIcon sx={{mr:1}}/>
                           <Typography variant="body1" noWrap>
                            Admin
                           </Typography>
                        </Fab>

                        }
                       
                       
                      
                    </Box>
                    <Box sx={{ marginLeft: 'auto', position: 'relative' }}>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: '#0088cc', maxWidth: '300px', minWidth: '50px', width: "50px", height: "50px", borderRadius: '50%' }}
                            onClick={handleProfileClick}
                        >
                            <FaceIcon />
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            sx={{ position: 'absolute', top: '40px', right: '0' }} // Adjust position if needed
                        >
                            <MenuItem disabled>
                                <Typography variant="body1">{localStorage.getItem('email')}</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default AppBarComponent;
