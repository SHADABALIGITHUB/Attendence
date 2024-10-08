import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
const Layout:React.FC = () => {
  return (
    <Box
    sx={{width:{md:'90vw'},display:'flex',justifyContent:'center',alignItems:"center",padding: {
      xs: '0 10px',   // Padding for extra small screens
      sm: '0 10px',   // Padding for small screens
      md: '0 100px',  // Padding for medium screens
      lg: '0 250px 0 250px',  // Padding for large screens
      // Padding for extra large screens
    }}}
   >
    <Outlet/>

    </Box>
  )
}

export default Layout
