// import React,{createContext, SetStateAction, useState} from 'react'

// interface UserData {
//     _id: string;
//     email: string;
//     username: string;
//     password: string;
//     verifiedStatus: boolean;
//     __v: number;
//     currentStreak: [number, Date];
//     longestStreak: number;
  
//     defaultSheetProgress: {
//       [sheetId: string]: {
//         progress: number;
//         lastUpdated: Date;
//         _id: string;
//       };
//     };
//   }
  
// interface UserContextType{
//     userData: UserData|null;
//     setUserData: React.Dispatch<SetStateAction<UserData|null>>;
// }

// export const UserDataContext=createContext<UserContextType>({
//     userData: null,
//     setUserData:()=>{}
// })

// const UserDataProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
//     const [userData,setUserData]=useState<UserData|null>(null);
     
//   return (
//       <UserDataContext.Provider value={{userData,setUserData}}>
//        {children}
//       </UserDataContext.Provider>
//   )
// }

// export default UserDataProvider;
