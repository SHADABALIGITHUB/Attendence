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
// import CircularProgress from "@mui/material/CircularProgress";
import SmallLoading from "../Loading/SmallLoading";
import { Logintype } from "../../context/Logintype";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { SnackbarContext} from "../../context/SnackbarProvider";

const AuthUser: React.FC = () => {
  const { setAuthStatus,setUserData } = useContext(AuthStatus);
  

  const navigate = useNavigate();
  const { logintype, setLogintype } = useContext(Logintype);
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
  const {openSnackbar} =useContext(SnackbarContext);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === "") {
      openSnackbar("Something wrong try again")
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
        openSnackbar("Account Created")
        navigate("/register-verify", { state: { email: email } });
      }
    } catch (err) {
      if (err) {
        openSnackbar("Something wrong try again");
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
        openSnackbar("Something wrong try again")
        setPasswordError(true);
        setHelperTextPassword("Password Required");

        return;
      }

      if (!response.status && response.message === "Email is required") {
        openSnackbar("Something wrong try again")
        setEmailError(true);
        setHelperTextEmail("Email Required");

        return;
      }

      if (!response.status && response.message === "Email is not Register") {
        openSnackbar("Email Not Registered")
        setEmailError(true);
        setHelperTextEmail("Email Not Registered");

        return;
      }

      if (!response.status && response.message === "Password not matched") {
        openSnackbar("Password Not Match")
        setPasswordError(true);
        setHelperTextPassword("Password Not matched");

        return;
      }
      if (!response.status && response.message === "user not Verified") {
        openSnackbar("Not a Verified User")
        setEmailError(true);
        setHelperTextEmail("Email not verified");
        setPasswordError(true);
      }

      if (response.status) {
        openSnackbar("Login User");
        localStorage.setItem("token", response.token);
        setUserData(response.user);
        setAuthStatus(true);
        navigate("/dashboard");
      }
    } catch (err) {
      if (err) {
        openSnackbar("Server Error ! Check Internet")
        setEmailError(true);
        setHelperTextEmail("Try Again");
        setPasswordError(true);
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  if(loading){
    return ( <SmallLoading value="Server May Take Up to 1 minute To Start"/>
    
    )
  }
  return (
    <Box
      onSubmit={logintype === "Register" ? handleRegister : handleSubmit}
      component="form"
      sx={style}
      noValidate
      autoComplete="off"
    >
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
            sx={{ fontSize: { xs: "12px", md: "14px" }, cursor: "pointer" }}
            underline="hover"
            onClick={() => {
              setLogintype((prev) =>
                prev === "Register" ? "Login" : "Register"
              );
            }}
          >
            {logintype == "Register"
              ? "Already have an account? Log in"
              : "Don't have an account? Register "}
          </MuiLink>
        
    </Box>
  );
};

export default AuthUser;
