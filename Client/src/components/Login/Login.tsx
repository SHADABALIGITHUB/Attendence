// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Link as RouterLink } from "react-router-dom";
// import { Typography, Link as MuiLink, IconButton } from "@mui/material";
// import { style } from "../../styles/login";
// import CloseIcon from "@mui/icons-material/Close";
// import FetchInstance from "../../fetchInstance/Fetch";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthStatus } from "../../context/Auth";
// import CircularProgress from "@mui/material/CircularProgress";
// import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import InputAdornment from "@mui/material/InputAdornment";

// const Login: React.FC = () => {
//   const { setAuthStatus } = useContext(AuthStatus);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   const [open, setOpen] = React.useState(false);
//   const [loading, setLoading] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [helperTextEmail, setHelperTextEmail] = useState<string>("");
//   const [helperTextPassword, setHelperTextPassword] = useState<string>("");
//   const [showPassword, setShowPassword] = useState<boolean>(false);

//   const handleClose = (
//     event: React.SyntheticEvent | Event,
//     reason?: SnackbarCloseReason
//   ) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     console.log(event);
//     setOpen(false);
//   };

//   //
//   const handleClickShowPassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const action = (
//     <React.Fragment>
//       <Button color="secondary" size="small" onClick={handleClose}>
//         close
//       </Button>
//       <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={handleClose}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </React.Fragment>
//   );

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await FetchInstance("/api/user/login", {
//         method: "POST",
//         body: JSON.stringify({ email: email, password: password }),
//       });

//       if (!response.status && response.message === "Password is required") {
//         setPasswordError(true);
//         setHelperTextPassword("Password Required");

//         return;
//       }

//       if (!response.status && response.message === "Email is required") {
//         setEmailError(true);
//         setHelperTextEmail("Email Required");

//         return;
//       }

//       if (!response.status && response.message === "Email is not Register") {
//         setEmailError(true);
//         setHelperTextEmail("Email Not Registered");

//         return;
//       }

//       if (!response.status && response.message === "Password not matched") {
//         setPasswordError(true);
//         setHelperTextPassword("Password Not matched");

//         return;
//       }
//       if(!response.status && response.message ==='user not Verified'){
//          setEmailError(true);
//         setHelperTextEmail("Email not verified");
//         setPasswordError(true);
        

//       }

//       if (response.status) {
//         setOpen(true);
//         localStorage.setItem("token", response.token);
//         localStorage.setItem("email", email);
//         setAuthStatus(true);
//         navigate("/dashboard");
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <Box
//       onSubmit={handleSubmit}
//       component="form"
//       sx={style}
//       noValidate
//       autoComplete="off"
//     >
//       <Snackbar
//         open={open}
//         autoHideDuration={4000}
//         onClose={handleClose}
//         message="Login Successfull"
//         action={action}
//       />

//       <IconButton
//         component={RouterLink}
//         to="/"
//         aria-label="close"
//         sx={{
//           position: "absolute",
//           right: 8,
//           top: 8,
//         }}
//       >
//         <CloseIcon />
//       </IconButton>

//       {loading ? (
//         <CircularProgress size={24} />
//       ) : (
//         <>
//           <Typography
//             variant="h4"
//             sx={{
//               color: "#068fb4",
//               fontSize: { xs: "20px", sm: "30px", md: "35px" },
//             }}
//             component="h4"
//             gutterBottom
//           >
//             {" "}
//             Login{" "}
//           </Typography>

//           <TextField
//             error={emailError}
//             helperText={helperTextEmail}
//             name="email"
//             onChange={(e) => {
//               setEmail(e.target.value);
//               setHelperTextEmail("");
//               setEmailError(false);
//             }}
//             value={email}
//             type="email"
//             label="Email"
//             variant="outlined"
//             fullWidth
//             required
//           />
//           <TextField
//             error={passwordError}
//             helperText={helperTextPassword}
//             name="password"
//             onChange={(e) => {
//               setPassword(e.target.value);
//               setPasswordError(false);
//               setHelperTextPassword("");
//             }}
//             value={password}
//             type={showPassword ? "text" : "password"}
//             label="Password"
//             variant="outlined"
//             fullWidth
//             required
//             slotProps={{
//               input: {
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label={
//                         showPassword
//                           ?"display the password"
//                           :"hide the password" 
//                       }
//                       onClick={handleClickShowPassword}
//                       edge="end"
//                     >
//                       {showPassword ?  <Visibility />:<VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               },
//             }}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             sx={{ maxWidth: "300px", minWidth: "100px" }}
//           >
//             Login
//           </Button>

//           <MuiLink
//             sx={{ fontSize: { xs: "12px", md: "14px" } }}
//             component={RouterLink}
//             to="/register"
//             underline="hover"
//           >
//             Don't have an account? Register
//           </MuiLink>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Login;
