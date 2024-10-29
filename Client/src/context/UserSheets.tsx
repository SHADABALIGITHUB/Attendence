import React, { createContext, useState, useEffect, useContext } from 'react';
import FetchInstance from '../fetchInstance/Fetch';


import  {UserSheetType} from '../components/Dashboard/Dashboard'
import { AuthStatus } from './Auth';
import {currentPageStateContext} from './CurrentPageState';

interface QuestionSheetContextType{
    UserSheetsData:UserSheetType[],
    setUserSheetsData:React.Dispatch<React.SetStateAction<UserSheetType[]>>
    refreshSheets: () => void 
}

export const UserSheetsDataContext= createContext<QuestionSheetContextType>({
    UserSheetsData:[],
    setUserSheetsData:()=>{},
    refreshSheets: () => {}
});

// Create a provider component
const UserSheetsDataProvider:React.FC<{children:React.ReactNode}> = ({ children }) => {
    const [UserSheetsData, setUserSheetsData] = useState<UserSheetType[]>([]);
   
     const {authStatus}=useContext(AuthStatus);
     const {currentstate}=useContext(currentPageStateContext);
          
       const email=localStorage.getItem('email');
       
     
     
  

 
    
        

        const CallApi =async()=>{

            if(!email){
                return ;
             }

          try{
            const response=await FetchInstance(`/api/sheet/user/${email}`,{
              method:"GET"
            })

            if(response.status){

                setUserSheetsData(response.data);
               
                

            }
            else{

               console.log("somthing Wrong ");

            }

          }
          catch(err){

              console.log("Err 501 server issue",err);

          }

        }

        const refreshSheets = () => {
            CallApi();
          };

      useEffect(()=>{
        

        CallApi();

        
        
       

     },[authStatus,currentstate]);

    return (
        <UserSheetsDataContext.Provider value={{ UserSheetsData,setUserSheetsData,refreshSheets }}>
            {children}
        </UserSheetsDataContext.Provider>
    );
};


export default UserSheetsDataProvider;