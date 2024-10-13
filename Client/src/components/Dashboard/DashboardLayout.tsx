import { Outlet } from "react-router-dom";
import AppBarComponent from "../NavbarComponent/AppBarComponent";
import React from 'react';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { AuthStatus } from '../../context/Auth';
import { useNavigate } from 'react-router-dom';


const DashboardLayout = () => {
    const navigate=useNavigate();
 
    const {setAuthStatus}=React.useContext(AuthStatus);
    const [open, setOpen] = React.useState(false);
   
    
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
               <ListItemButton onClick={()=>{ sessionStorage.removeItem('token'); sessionStorage.removeItem('email'); setAuthStatus(false); navigate('/login');}}>
                 <ListItemIcon>
                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                 </ListItemIcon>
                 <ListItemText primary={text} />
               </ListItemButton>
             </ListItem>
           ))}
         </List>
       </Drawer>
       <AppBarComponent setOpen={setOpen}/>
       <Outlet />
       </>
  )
}

export default DashboardLayout;