import React,{useEffect} from 'react';

interface AuthContextType {
    authStatus: boolean;
    setAuthStatus: React.Dispatch<React.SetStateAction<boolean>>;
    userData: UserData|null;
    setUserData: React.Dispatch<React.SetStateAction<UserData|null>>;
};
interface UserData {
    _id: string;
    email: string;
    username: string;
    password: string;
    verifiedStatus: boolean;
    __v: number;
    currentStreak: [number, Date];
    longestStreak: number;
  
    defaultSheetProgress: {
      [sheetId: string]: {
        progress: number;
        lastUpdated: Date;
        _id: string;
      };
    };
  }


export const AuthStatus=React.createContext<AuthContextType>({
    authStatus: false,
    setAuthStatus: ()=>{},
    userData: null,
    setUserData:()=>{}
});

const AuthStatusProvider:React.FC<{children:React.ReactNode}> =({children}) =>{

    const [authStatus,setAuthStatus]=React.useState<boolean >(false);
    const [userData,setUserData]=React.useState<UserData|null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthStatus(true); // Set authStatus to true if token exists
        } else {
            setAuthStatus(false); // Set authStatus to false if no token
        }
    }, [localStorage.getItem('token')]);
    

        

    return (
        <AuthStatus.Provider value={{authStatus,setAuthStatus,userData,setUserData}}>

            {children}

        </AuthStatus.Provider>

    )

}

export default AuthStatusProvider;

