import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardContainer from './DashboardContainer';
import { AuthStatus } from '../../context/Auth';
import { useNavigate } from 'react-router-dom';


const Dashboard: React.FC = () => {
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
  const {setAuthStatus}=React.useContext(AuthStatus);

  const NewCreation=()=>{
    console.log("working i am here ");
  }

  

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <>      

      <Drawer
         
        variant="persistent"
        anchor="left"
        open={open}
        
        sx={{flexShrink: 0,position :"fixed" }}
        style={{width:'300px'}}
      >
        
        <div style={{marginTop:'10px'}}>
          
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={()=>{ sessionStorage.removeItem('token'); setAuthStatus(false); navigate('/login');}}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
        
     

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
          <Box sx={{display:'flex',gap:'20px',cursor:'pointer'}}>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <Typography variant="h6" noWrap sx={{':hover':{color:'#E2DFD2'}}} onClick={NewCreation}>
             Create New Sheet
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>

 
       <DashboardContainer/>
      </>


   
  );
};

export default Dashboard;
