import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Link as MuiLink, IconButton } from "@mui/material";
import { style } from "../../styles/login";
import CloseIcon from "@mui/icons-material/Close";
import FetchInstance from "../../fetchInstance/Fetch";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthStatus } from "../../context/Auth";
import CircularProgress from "@mui/material/CircularProgress";
// import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import {Logintype} from '../../context/Logintype';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

const AuthUser: React.FC = () => {
  const { setAuthStatus } = useContext(AuthStatus);
  const navigate = useNavigate();
  const {logintype,setLogintype}=useContext(Logintype);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [helperTextEmail, setHelperTextEmail] = useState<string>("");
  const [helperTextPassword, setHelperTextPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // const handleClose = (
  //   event: React.SyntheticEvent | Event,
  //   reason?: SnackbarCloseReason
  // ) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   console.log(event);
  //   setOpen(false);
  // };

  //
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // const action = (
  //   <React.Fragment>
  //     <Button color="secondary" size="small" onClick={handleClose}>
  //       close
  //     </Button>
  //     <IconButton
  //       size="small"
  //       aria-label="close"
  //       color="inherit"
  //       onClick={handleClose}
  //     >
  //       <CloseIcon fontSize="small" />
  //     </IconButton>
  //   </React.Fragment>
  // );

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username ==='') {
      setUsernameError(true);
      console.log("Username can only contain letters and numbers.");
      setLoading(false);
      return;
    }
    setLoading(true);

    try {
      const user = await FetchInstance("/api/user/create", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
        }),
      });

      if (user.status) {
        setLoading(false);
        navigate("/register-verify", { state: { email: email } });
      }
    } catch (err) {
       if (err) {
        setLoading(false);
        setUsernameError(true);
        setEmailError(true);
        setHelperTextEmail("Try Again");
        setPasswordError(true);
      }
      console.error("There was a problem with the fetch operation:", err); // Error handling
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await FetchInstance("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
      });

      if (!response.status && response.message === "Password is required") {
        setPasswordError(true);
        setHelperTextPassword("Password Required");

        return;
      }

      if (!response.status && response.message === "Email is required") {
        setEmailError(true);
        setHelperTextEmail("Email Required");

        return;
      }

      if (!response.status && response.message === "Email is not Register") {
        setEmailError(true);
        setHelperTextEmail("Email Not Registered");

        return;
      }

      if (!response.status && response.message === "Password not matched") {
        setPasswordError(true);
        setHelperTextPassword("Password Not matched");

        return;
      }
      if (!response.status && response.message === "user not Verified") {
        setEmailError(true);
        setHelperTextEmail("Email not verified");
        setPasswordError(true);
      }

      if (response.status) {
        // setOpen(true);
        localStorage.setItem("token", response.token);
        localStorage.setItem("email", email);
        setAuthStatus(true);
        navigate("/dashboard");
      }
    } catch (err) {

      if (err) {
        setEmailError(true);
        setHelperTextEmail("Try Again");
        setPasswordError(true);
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box
      onSubmit={logintype === 'Register'? handleRegister : handleSubmit}
      component="form"
      sx={style}
      noValidate
      autoComplete="off"
    >
      {/* <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Login Successfull"
        action={action}
      /> */}

      <IconButton
        component={RouterLink}
        to="/"
        aria-label="close"
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>

      {loading ? (
        <CircularProgress size={24} />
      ) : (
        <>
          <Typography
            variant="h4"
            sx={{
              color: "#068fb4",
              fontSize: { xs: "20px", sm: "30px", md: "35px" },
            }}
            component="h4"
            gutterBottom
          >
            {" "}
            {logintype == "Register" ? "Register" : "Login"}{" "}
          </Typography>

          {logintype == "Register" && (
            <TextField
              error={usernameError}
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameError(false);
              }}
              value={username}
              name="username"
              type="text"
              label="Username"
              variant="outlined"
              fullWidth
              required
            />
          )}

          <TextField
            error={emailError}
            helperText={helperTextEmail}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setHelperTextEmail("");
              setEmailError(false);
            }}
            value={email}
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            error={passwordError}
            helperText={helperTextPassword}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
              setHelperTextPassword("");
            }}
            value={password}
            type={showPassword ? "text" : "password"}
            label="Password"
            variant="outlined"
            fullWidth
            required
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "display the password"
                          : "hide the password"
                      }
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ maxWidth: "300px", minWidth: "100px" }}
          >
            {" "}
            {logintype == "Register" ? "Register" : "Login"}{" "}
          </Button>

          <MuiLink
            sx={{ fontSize: { xs: "12px", md: "14px" },cursor:'pointer' }}
            underline="hover"
            onClick={()=>{setLogintype(prev=>prev==='Register'?'Login':'Register')}}
          >
          {logintype == "Register"?"Already have an account? Log in": "Don't have an account? Register "}
          </MuiLink>'
        </>
      )}
    </Box>
  );
};

export default AuthUser;
