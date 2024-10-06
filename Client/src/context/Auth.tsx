import React from 'react';

type AuthContextType = {
    authStatus: boolean;
    setAuthStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthStatus=React.createContext<AuthContextType| undefined>(undefined);

const AuthStatusProvider:React.FC<{children:React.ReactNode}> =({children}) =>{

    const [authStatus,setAuthStatus]=React.useState<boolean >(false);


    return (
        <AuthStatus.Provider value={{authStatus,setAuthStatus}}>

            {children}

        </AuthStatus.Provider>

    )

}

export default AuthStatusProvider;

