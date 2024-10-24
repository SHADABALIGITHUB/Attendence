// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Link as RouterLink } from "react-router-dom";
// import { Typography, Link as MuiLink, IconButton } from "@mui/material";
// import { style } from "../../styles/login";
// import CloseIcon from "@mui/icons-material/Close";
// import { useNavigate } from "react-router-dom";
// import FetchInstance from "../../fetchInstance/Fetch";
// import CircularProgress from "@mui/material/CircularProgress";

// const Register: React.FC = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);

//   return (
//     <Box
//       component="form"
//       // onSubmit={}
//       sx={style}
//       noValidate
//       autoComplete="off"
//     >
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
//             sx={{ color: "#068fb4", fontSize: { xs: "20px", md: "35px" } }}
//             component="h4"
//             gutterBottom
//           >
//             Create Account{" "}
//           </Typography>
         
//           <TextField
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             value={email}
//             name="email"
//             type="email"
//             label="Email"
//             variant="outlined"
//             fullWidth
//             required
//           />
//           <TextField
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             value={password}
//             name="password"
//             type="password"
//             label="Password"
//             variant="outlined"
//             fullWidth
//             required
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             sx={{ maxWidth: "300px", minWidth: "100px" }}
//           >
//             {" "}
//             Register{" "}
//           </Button>
//           <MuiLink
//             sx={{ fontSize: { xs: "12px", md: "14px" } }}
//             component={RouterLink}
//             to="/login"
//             underline="hover"
//           >
//             Already have an account? Log in
//           </MuiLink>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Register;
