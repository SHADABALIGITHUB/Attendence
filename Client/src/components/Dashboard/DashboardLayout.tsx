import { Outlet } from "react-router-dom";
import AppBarComponent from "../NavbarComponent/AppBarComponent";
// import React from 'react';
// import IconButton from '@mui/material/IconButton';

// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import Drawer from '@mui/material/Drawer';
// import Divider from '@mui/material/Divider';
// import List from '@mui/material/List';

// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// import { AuthStatus } from '../../context/Auth';
// import { useNavigate } from 'react-router-dom';


const DashboardLayout = () => {
   
  return (
       <>
       
       <AppBarComponent/>
       <Outlet />
       </>
  )
}

export default DashboardLayout;