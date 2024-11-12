import React, { useContext, useState } from 'react'
import {Box,Typography,TextField,Button,IconButton }from '@mui/material';
import  CloseIcon  from '@mui/icons-material/Close';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import { style } from "../../styles/login";
import { SnackbarContext } from '../../context/SnackbarProvider';
import FetchInstance from '../../fetchInstance/Fetch';
import  SmallLoading from '../Loading/SmallLoading';
const ForgetPassword:React.FC= () => {
  const [email,setEmail]=useState<string>('');
  const [mailsend,setMailSend]=useState<boolean>(false);
  const [otp,setOtp]=useState<string>("");
  const [password,setPassword]=useState<String>("");
  const [confirmPassword,setConfirmPassword]=useState<String>("");
  const {openSnackbar}=useContext(SnackbarContext);
  const [loading,setloading]=useState<boolean>(false);
  const navigate=useNavigate()


   const handleSubmitEmail= async (event:React.FormEvent<HTMLFormElement>)=>{
       event.preventDefault();
       setloading(true);

       try{
            const response= await FetchInstance('/api/forget-password/email-send-otp',{
               method:"POST",
               body:JSON.stringify({email:email})
            })
            if(response.message==="User Not Found"){
              openSnackbar("User Not registered ")
            }
            else if(response.message === "User Find, but OTP issue"){
              openSnackbar("Try Again,Otp Not Match")
            }
            else if(response.message === "Mail Send Please Change Password"){
             openSnackbar("Otp Send Successfully");
             setMailSend(true);
            }
            else{
              openSnackbar("Server error");
            }
            setloading(false);

       }catch(err){
           console.log("Email issue ",err)
           openSnackbar("Server error");
           setloading(false);
       }
        
       

   }

     const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];
    const isNumber = /[0-9]/.test(event.key);

    // Block any key that isn't allowed
    if (!isNumber && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }

    // Custom handling for Backspace
    if (event.key === "Backspace") {
      setOtp((prev) => {
        // Remove the last two characters if there's a hyphen, else just the last one
        return prev.endsWith("-") ? prev.slice(0, -2) : prev.slice(0, -1);
      });
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters
    let value = event.target.value.replace(/[^0-9]/g, "");

    // Limit to 4 digits
    if (value.length > 4) return;

    // Automatically add hyphens after each digit
    value = value.split("").join("-");
    
    setOtp(value);
  };
  const handlepasswordChangeSubmit= async (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const ActuallOtp=otp.split('-').join('');
    setloading(true);
       try
       {
           const response= await FetchInstance('/api/forget-password/change-password',{
             method:"POST",
             body:JSON.stringify({otp:ActuallOtp,email:email,password:password})
           })
           if(response.message==="Password Changed Successfully"){

            openSnackbar("Password Changed Login");
            setloading(false);
            navigate('/auth');
              
           }else if(response.message==="Otp not verified"){
            openSnackbar("Otp Not Matched");
           }
           else{
            openSnackbar("Something Went Wrong here");
           }
           setloading(false);
       }
       catch(err)
       {
         console.log("Issue in Changing password",err);
        openSnackbar("Something Went Wrong here");
        setloading(false);

       }
  }

  if(loading){
    return (
       <SmallLoading value="Wait a moment"/>
    )
  }

  return (
    <Box 
      onSubmit={mailsend?handlepasswordChangeSubmit:handleSubmitEmail}
      component="form"
      sx={style}
      noValidate
      autoComplete="off"
      >
        <IconButton
        component={RouterLink}
        to="/auth"
        aria-label="close"
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>

{!mailsend? (
  <>
     <Typography
            variant="h6"
            sx={{
              color: "#068fb4",
              fontSize: { xs: "20px", sm: "30px", md: "35px" },
            }}
            component="h4"
            gutterBottom
          >
            Registered Email
          </Typography>
          
            <TextField
              onChange={(e)=>{setEmail(e.target.value)}}
              value={email}
              name="email"
              type="text"
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
            <Button
            type="submit"
            variant="contained"
            sx={{ maxWidth: "300px", minWidth: "100px" }}
          >
            Send Otp
          </Button>
    
  </>
):(
  <>

<Typography
            variant="h6"
            sx={{
              color: "#068fb4",
              fontSize: { xs: "20px", sm: "30px", md: "35px" },
            }}
            component="h4"
            gutterBottom
          >
            Enter New Password
            
          </Typography>
          
            <TextField
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              value={otp}
              name="otp"
              type="text"
              label="OTP"
              variant="outlined"
              fullWidth
              required
            />
          
          <TextField
            // error={emailError}
            // helperText={helperTextEmail}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
              
            }}
            value={password}
            type="text"
            label="New Password"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            // error={passwordError}
            // helperText={helperTextPassword}
            name="confirm-password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
             
            }}
            value={confirmPassword}
            type="text"
            // type={showPassword ? "text" : "password"}
            label="Confirm-Password"
            variant="outlined"
            fullWidth
            required
            
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ maxWidth: "300px", minWidth: "100px" }}
          >
            Submit
          </Button>

  </>
)
}




       

         
      
    </Box>
  )
}

export default ForgetPassword;
