import {createContext, useState } from "react";

interface Logintypecontext{
    logintype:"Login"|"Register",
    setLogintype : React.Dispatch<React.SetStateAction<"Register"|"Login">>

}

export const Logintype=createContext<Logintypecontext>({
    logintype:"Login",
    setLogintype:()=>{}
})



const LogintypeProvider:React.FC<{children:React.ReactNode}>=({children})=>{
    const [logintype,setLogintype]=useState<"Login"|"Register">('Login');


    return (
        <Logintype.Provider value={{logintype,setLogintype}}>
             {children}
        </Logintype.Provider>
    )

}

export default LogintypeProvider;