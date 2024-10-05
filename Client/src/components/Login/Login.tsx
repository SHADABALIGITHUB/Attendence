import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography,Link } from '@mui/material';
import {style} from '../../styles/login'


const Login:React.FC = () => {
  return (
    <Box
    sx={{width:'100vw',display:'flex',justifyContent:'center',alignItems:"center"}}
   >
   <Box

     component="form"
     sx={style}
     noValidate
     autoComplete='off'
     >
       <Typography variant='h4' sx={{ color: '#068fb4' }} component='h4' gutterBottom>Login Here</Typography>
       <TextField name="username" type='text' label="Username" variant="outlined" fullWidth  required />
       <TextField name="password" type='password' label="Password" variant="outlined" fullWidth  required  />
       <TextField name="email" type="email" label="Email" variant="outlined" fullWidth required />
       <Button type='submit' variant="contained" sx={{maxWidth:'300px',minWidth:'100px'}}> login </Button>
       <Link href="/login" underline="hover">
        Already have an account? Log in
       </Link>

     
   </Box>

</Box>
  )
}

export default Login
