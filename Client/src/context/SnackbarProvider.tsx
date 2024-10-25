import React, { createContext, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export interface SnackbarContextType {
    openSnackbar: (message: string) => void;
}

export const SnackbarContext = createContext<SnackbarContextType>({
    openSnackbar:()=>{}
});

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const openSnackbar = (msg: string) => {
        setMessage(msg);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const action = (
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <SnackbarContext.Provider value={{ openSnackbar }}>
            {children}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={1500}
                onClose={handleClose}
                message={message}
                action={action}
            />
        </SnackbarContext.Provider>
    );
};

// export const useSnackbar = () => {
//     const context = useContext(SnackbarContext);
//     if (!context) {
//         throw new Error('useSnackbar must be used within a SnackbarProvider');
//     }
//     return context;
// };
export default SnackbarProvider;