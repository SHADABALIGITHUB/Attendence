import {createContext, useState } from "react";


interface ContextPageStateType{
    currentstate:"Dashboard"|"UserSheet"|"DefaultSheet"|"CreateSheet"|"Admin",
    setCurrentState:React.Dispatch<React.SetStateAction<"Dashboard"|"UserSheet"|"DefaultSheet"|"CreateSheet"|"Admin">>
 
}
export const currentPageStateContext=createContext<ContextPageStateType>({
    currentstate:"Dashboard",
    setCurrentState:()=>{},
})


const CurrentPageState:React.FC<{children:React.ReactNode}>=({children})=>{
    const [currentstate,setCurrentState]=useState<"Dashboard"|"UserSheet"|"DefaultSheet"|"CreateSheet"|"Admin">("Dashboard");



return  (
    <currentPageStateContext.Provider value={{currentstate,setCurrentState}}>
        {children}
    </currentPageStateContext.Provider>
)

}



export default CurrentPageState;