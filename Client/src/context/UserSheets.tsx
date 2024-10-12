import React, { createContext, useState, useEffect, useContext } from 'react';
import FetchInstance from '../fetchInstance/Fetch';


import  {UserSheetType} from '../components/Dashboard/DashboardContainer'
import { AuthStatus } from './Auth';

interface QuestionSheetContextType{
    UserSheetsData:UserSheetType[],
    setUserSheetsData:React.Dispatch<React.SetStateAction<UserSheetType[]>>
}

export const UserSheetsDataContext= createContext<QuestionSheetContextType>({
    UserSheetsData:[],
    setUserSheetsData:()=>{},
});

// Create a provider component
const UserSheetsDataProvider:React.FC<{children:React.ReactNode}> = ({ children }) => {
    const [UserSheetsData, setUserSheetsData] = useState<UserSheetType[]>([]);
   
    const {authStatus}=useContext(AuthStatus);
          
       const email=sessionStorage.getItem('email');
       
     
     
  

    useEffect(()=>{
        
    
         if(!email){
            return ;
         }
        const CallApi =async()=>{

          try{
            const response=await FetchInstance(`/api/sheet/user/${email}`,{
              method:"GET"
            })

            if(response.status){

                setUserSheetsData(response.data);
                console.log(response);
                

            }
            else{

               console.log("somthing Wrong ");

            }

          }
          catch(err){

              console.log("Err 501 server issue",err);

          }

        }

        CallApi();

        
        
       

     },[authStatus]);

    return (
        <UserSheetsDataContext.Provider value={{ UserSheetsData,setUserSheetsData }}>
            {children}
        </UserSheetsDataContext.Provider>
    );
};


export default UserSheetsDataProvider;