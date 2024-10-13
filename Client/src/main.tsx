import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/roboto/300.css'; // Light font
import '@fontsource/roboto/400.css'; // Regular font
import '@fontsource/roboto/500.css'; // Medium font
import '@fontsource/roboto/700.css';
import AuthStatusProvider from './context/Auth.tsx';
import UserSheetsDataProvider from './context/UserSheets.tsx';
import DefaultSheetDataProvider from './context/DefaultSheets.tsx';
import CurrentPageState from './context/CurrentPageState.tsx';
import { CssBaseline } from '@mui/material';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthStatusProvider>
    <CurrentPageState>
      <DefaultSheetDataProvider>
      <UserSheetsDataProvider>
    <CssBaseline/>
    <App />
    </UserSheetsDataProvider>
    </DefaultSheetDataProvider>
     </CurrentPageState>
    </AuthStatusProvider>
  </StrictMode>,
)
