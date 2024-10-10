import React from 'react'
import { useContext } from 'react';
import { AuthStatus } from '../../context/Auth';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {style} from '../../styles/login';

const CreateSheet:React.FC = () => {
   const navigate=useNavigate();
    const {authStatus}=useContext(AuthStatus);

      console.log(authStatus);
  return (

      <Box
      onSubmit={()=>{navigate('/create-sheet-table')}}
      component='form'
      noValidate
      autoComplete='off'
      sx={style}

       >

<Typography variant='h4' sx={ { color: '#068fb4',fontSize:{xs:'20px',sm:'30px',md:'30px'} }}  component='h6' gutterBottom> Enter Sheet Data </Typography>
       
      
       <TextField name="question" type="text" label="Total Questions" variant="outlined" fullWidth required  />
       <TextField name="password" type='text' label="_blank" variant="outlined" fullWidth  required  />

       <Button type='submit' variant="contained" sx={{maxWidth:'300px',minWidth:'100px'}}> login </Button>
        <MuiLink sx={{fontSize:{xs:'12px',md:'14px'}}} component={RouterLink} to="/register" underline="hover">
        Already have an account? Log in
       </MuiLink>



     
       
    
      </Box>
  )
}

export default CreateSheet;