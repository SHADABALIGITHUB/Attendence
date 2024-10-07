
//  import React from 'react'
//  import Toolbar from '@mui/material/Toolbar';
//  import MenuIcon from '@mui/icons-material/Menu';
//  import {MuiAppBar as AppBar}  from '@mui/material/AppBar';

//  const AppBarComponent:React.FC = () => {
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//       setOpen(true);
//     };
  
//    return (
//     <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={[
//               {
//                 marginRight: 5,
//               },
//               open && { display: 'none' },
//             ]}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Mini variant drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//    )
//  }
 
//  export default AppBarComponent
 