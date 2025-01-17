import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { AuthStatus } from '../../context/Auth';
import { useContext } from 'react';
import { Box, Button, Typography } from "@mui/material";
import { Logintype } from '../../context/Logintype';






const LandingPage:React.FC = () => {

  const navigate=useNavigate();
  const {setLogintype}=useContext(Logintype);

  

  const authContext = useContext(AuthStatus);

      if (!authContext) {
          throw new Error("useContext must be used within AuthStatusProvider");
        }
  
        const {setAuthStatus } = authContext;
  
  
      useEffect(()=>{
  
             setAuthStatus(false);
  
      },[])
    
    


  return  (
    <> 
         <img src='https://res.cloudinary.com/ddnum51yo/image/upload/v1729440679/LeetCode/logo.png'
         alt='logo' 
         style={{
          width:'50px',
          height:"50px",
          position:'fixed',
          top:'10px',
          left:'10px',

         }}></img>

  
            <Box
             
            >
                <Typography
               
                variant='h2'

                component= 'h1'
                sx={{
                 
                    fontSize: {
                      xs: '2rem', 
                      sm: '2rem',    // Adjust for small screens
                      md: '3rem',    // Adjust for medium screens
                      lg: '4rem',    // Adjust for large screens
                    },
                    fontWeight: 700,
                    color: '#000',
                }}
                >
                   Conquer LeetCode, One Sheet at a Time
                </Typography>

                <Typography
                variant='body2'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#000',
                }}
                >
                    Covering 3200+ questions across all topics.
                    Create personalized sheets custom and default sheets available
                </Typography>

                <Box sx={{display:'flex',gap:'20px'}}>
                 
            
       
            <Button onClick={()=>{setLogintype('Login'); navigate('/auth')}} variant='outlined' sx={{
                 
                 fontSize: {
                   xs: '0.7rem', 
                   sm: '0.9rem',   
                  
                 }}}
                  >  
                  Login Your Account

                   </Button>
                   
           <Button onClick={()=>{setLogintype('Register'); navigate('/auth')}} variant='contained'  sx={{
                 
                 fontSize: {
                   xs: '0.7rem', 
                   sm: '0.9rem',   
                  
                 }}}>
                      Register New User

                       </Button> 
            
        
           
                       
               
                </Box>

                 <Typography variant='body2' sx={{margin:'10px'}}> Test : Email : <span style={{color:'blue'}}>test@gmail.com </span> <br/>
                  Password: <span style={{color:'blue'}}> test </span></Typography>
            </Box>

            <Box
            >
                <img
                src="https://res.cloudinary.com/ddnum51yo/image/upload/v1729453114/LeetCode/Leetcode_svg.png"
                alt="headerImg"
                style={{ 
                    width: "100%", 
                    marginBottom: -15,
                }}
                />
            </Box>
            </>
        

        
    )
}

export default LandingPage
