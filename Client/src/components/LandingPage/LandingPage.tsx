import React, { useEffect } from 'react'
import {Link as RouterLink} from 'react-router-dom';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { AuthStatus } from '../../context/Auth';
import { useContext } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
  }));

const LandingPage:React.FC = () => {
    const authContext = useContext(AuthStatus);

    if (!authContext) {
        throw new Error("useContext must be used within AuthStatusProvider");
      }

      const { authStatus, setAuthStatus } = authContext;


    useEffect(()=>{

           setAuthStatus(false);

    },[])

   
      

  return (
    
       <>
      
      <h2 style={{color:'red'}} >Hello, {authStatus?"Welcome":"Login Please"}</h2>
       
      <RouterLink to="/login" ><Item>  Login Your Account </Item></RouterLink>
    <RouterLink to="/register"><Item>  Register New User </Item> </RouterLink> 
    <RouterLink to="/forget-password"><Item> forget-password  </Item></RouterLink> 
      
       </>
  )
}

export default LandingPage;
