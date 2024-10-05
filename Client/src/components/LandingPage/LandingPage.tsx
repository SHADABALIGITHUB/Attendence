import React from 'react'
import {Link as RouterLink} from 'react-router-dom';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
  }));

const LandingPage:React.FC = () => {

   
      

  return (
    
       <>
      

       
      <RouterLink to="/login" ><Item>  Login Your Account </Item></RouterLink>
    <RouterLink to="/register"><Item>  Register New User </Item> </RouterLink> 
    <RouterLink to="/forget-password"><Item> forget-password  </Item></RouterLink> 
      
       </>
  )
}

export default LandingPage;
