import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link as RouterLink} from 'react-router-dom';
import { Typography,Link as MuiLink,IconButton } from '@mui/material';
import {style} from '../../styles/login'
import CloseIcon from '@mui/icons-material/Close';


const Login:React.FC = () => {
   
   
  return (
   
   <Box

     component="form"
     sx={style}
     noValidate
     autoComplete='off'
     >  

<IconButton

component={RouterLink}
to="/"
aria-label="close"

sx={{
  position: 'absolute',
  right: 8,
  top: 8,
}}
>
<CloseIcon />
</IconButton>
       
       <Typography variant='h4' sx={ { color: '#068fb4',fontSize:{xs:'20px',md:'35px'} }}  component='h4' gutterBottom> Login  </Typography>
       
      
       <TextField name="email" type="email" label="Email" variant="outlined" fullWidth required  />
       <TextField name="password" type='password' label="Password" variant="outlined" fullWidth  required  />

       <Button type='submit' variant="contained" sx={{maxWidth:'300px',minWidth:'100px'}}> login </Button>
        <MuiLink sx={{fontSize:{xs:'12px',md:'14px'}}} component={RouterLink} to="/register" underline="hover">
        Already have an account? Log in
       </MuiLink>

     
   </Box>


  )
}

export default Login
