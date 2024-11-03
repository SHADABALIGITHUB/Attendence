import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css"; // Light font
import "@fontsource/roboto/400.css"; // Regular font
import "@fontsource/roboto/500.css"; // Medium font
import "@fontsource/roboto/700.css";
import AuthStatusProvider from "./context/Auth.tsx";
import DefaultSheetDataProvider from "./context/DefaultSheets.tsx";
import LogintypeProvider from "./context/Logintype";
import SnackbarProvider from "./context/SnackbarProvider.tsx";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <LogintypeProvider>
          <AuthStatusProvider>
            <DefaultSheetDataProvider>
              <CssBaseline />
              <App />
            </DefaultSheetDataProvider>
          </AuthStatusProvider>
        </LogintypeProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>
);
