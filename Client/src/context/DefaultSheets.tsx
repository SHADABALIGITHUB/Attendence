import React, { createContext, useState, useEffect, useContext } from 'react';
import FetchInstance from '../fetchInstance/Fetch';


import  {UserSheetType} from '../components/Dashboard/Dashboard'
import { AuthStatus } from './Auth';
import {currentPageStateContext} from './CurrentPageState';

interface QuestionSheetContextType{
    DefaultSheetData:UserSheetType[],
    setDefaultSheetData:React.Dispatch<React.SetStateAction<UserSheetType[]>>
}

export const DefaultSheetDataContext= createContext<QuestionSheetContextType>({
    DefaultSheetData:[],
    setDefaultSheetData:()=>{},
});

// Create a provider component
const DefaultSheetDataProvider:React.FC<{children:React.ReactNode}> = ({ children }) => {
    const [DefaultSheetData, setDefaultSheetData] = useState<UserSheetType[]>([]);
   
    const {authStatus}=useContext(AuthStatus);
    const {currentstate}=useContext(currentPageStateContext);
          
       
       
     
     
  

       useEffect(()=>{

        const CallApi =async()=>{

          try{
            const response=await FetchInstance(`/api/sheet/default/shadab89@gmail.com`,{
              method:"GET"
            })

            if(response.status){

                setDefaultSheetData(response.data);
                

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

        
        
       

     },[authStatus,currentstate])

    return (
        <DefaultSheetDataContext.Provider value={{ DefaultSheetData,setDefaultSheetData }}>
            {children}
        </DefaultSheetDataContext.Provider>
    );
};


export default DefaultSheetDataProvider;