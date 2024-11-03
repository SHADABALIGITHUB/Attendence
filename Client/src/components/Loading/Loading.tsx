import React, { useContext } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthStatus } from "../../context/Auth";
const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { loading } = useContext(AuthStatus);

  if (loading) {
    return (
      <Box sx={{ width: "100%", height: "100%" }}>
        <CircularProgress size={24} />
      </Box>
    );
  }

  return <>{children}</>;
};

export default Loading;
