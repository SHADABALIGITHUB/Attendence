import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link as RouterLink} from 'react-router-dom';
import { Typography,Link as MuiLink ,IconButton} from '@mui/material';
import {style} from '../../styles/login'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


const Register:React.FC = () => {
    const  navigate=useNavigate()
    const [username, setUsername] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const [email,setEmail]=useState<String>('');


   

   const handleRegister= async (event:React.FormEvent<HTMLFormElement>)=>{

        event.preventDefault();
        
        
        console.log("working1");
        
        try {
        console.log("working2");
        const user= await fetch('http://localhost:5000/api/user/create',{ 
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username:username,password:password,email:email})

        })
        console.log("working3");

        const data = await user.json();

        if(data.status){
            navigate('/register-verify');
        }
        

        console.log(data);
    }
    catch(err){
        console.error('There was a problem with the fetch operation:', err); // Error handling
    }
    }
   
  return (
   
     <Box

     component="form"
     onSubmit={(event)=>handleRegister(event)}
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
       
       <Typography  variant='h4' sx={ { color: '#068fb4',fontSize:{xs:'20px',md:'35px'} }}  component='h4' gutterBottom>Create Account </Typography>
       <TextField onChange={(e)=>{setUsername(e.target.value)}} name="username" type='text' label="Username" variant="outlined" fullWidth  required />
       <TextField onChange={(e)=>{setEmail(e.target.value)}} name="email" type="email" label="Email" variant="outlined" fullWidth required />
       <TextField onChange={(e)=>{setPassword(e.target.value)}}name="password" type='password' label="Password" variant="outlined" fullWidth  required  />
      
       <Button type='submit' variant="contained" sx={{maxWidth:'300px',minWidth:'100px'}}> Register </Button>
       <MuiLink sx={{fontSize:{xs:'12px',md:'14px'}}} component={RouterLink} to="/login" underline="hover">
        Already have an account? Log in
       </MuiLink>

     
   </Box>


  )
}

export default Register
