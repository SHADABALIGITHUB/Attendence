import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
const Layout:React.FC = () => {
  return (
    <Box
    sx={{width:'100vw',display:'flex',justifyContent:'center',alignItems:"center"}}
   >
    <Outlet/>

    </Box>
  )
}

export default Layout
