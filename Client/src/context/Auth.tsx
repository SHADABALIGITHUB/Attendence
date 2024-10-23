import React,{useEffect} from 'react';

interface AuthContextType {
    authStatus: boolean;
    setAuthStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthStatus=React.createContext<AuthContextType>({
    authStatus: false,
    setAuthStatus: ()=>{}
});

const AuthStatusProvider:React.FC<{children:React.ReactNode}> =({children}) =>{

    const [authStatus,setAuthStatus]=React.useState<boolean >(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthStatus(true); // Set authStatus to true if token exists
        } else {
            setAuthStatus(false); // Set authStatus to false if no token
        }
    }, [localStorage.getItem('token')]);
    

        

    return (
        <AuthStatus.Provider value={{authStatus,setAuthStatus}}>

            {children}

        </AuthStatus.Provider>

    )

}

export default AuthStatusProvider;

