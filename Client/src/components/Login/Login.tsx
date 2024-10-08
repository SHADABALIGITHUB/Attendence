import React, {useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link as RouterLink} from 'react-router-dom';
import { Typography,Link as MuiLink,IconButton } from '@mui/material';
import {style} from '../../styles/login'
import CloseIcon from '@mui/icons-material/Close';
import FetchInstance from '../../fetchInstance/Fetch';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthStatus } from '../../context/Auth';


const Login:React.FC = () => {
    const {setAuthStatus}=useContext(AuthStatus);
    const navigate=useNavigate();
    const [email,setEmail]=useState<string>('');
    const [password,setPassword]=useState<string>('');
    
     
  
    
   

   
   const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault();
        try{

            const response= await FetchInstance('/api/user/login',{
                method:'POST',
                body: JSON.stringify({email:email,password:password})
            })

          

            if(response.status){
                 sessionStorage.setItem('token',response.token);
                 setAuthStatus(true);
                 navigate('/dashboard');
            }
            

        }
        catch(err){

            console.log("error",err);

        }

        

   }
   return (
   
   <Box
     onSubmit={(e)=>{handleSubmit(e)}}
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
       
       <Typography variant='h4' sx={ { color: '#068fb4',fontSize:{xs:'20px',sm:'30px',md:'35px'} }}  component='h4' gutterBottom> Login  </Typography>
       
      
       <TextField name="email" onChange={(e)=>{setEmail(e.target.value)}} type="email" label="Email" variant="outlined" fullWidth required  />
       <TextField name="password" onChange={(e)=>{setPassword(e.target.value)}} type='password' label="Password" variant="outlined" fullWidth  required  />

       <Button type='submit' variant="contained" sx={{maxWidth:'300px',minWidth:'100px'}}> login </Button>
        <MuiLink sx={{fontSize:{xs:'12px',md:'14px'}}} component={RouterLink} to="/register" underline="hover">
        Already have an account? Log in
       </MuiLink>

     
   </Box>


  )
  
 
}

export default Login
