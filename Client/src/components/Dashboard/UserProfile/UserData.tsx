import React, { useContext } from 'react'
import { AuthStatus } from '../../../context/Auth';
 const UserData:React.FC = () => {
    const {userData}= useContext(AuthStatus);

  return (
    <div>
        <h2>
             {userData?.email}
        </h2>
        <h2>
             {userData?.username}
            
        </h2>
        <h2>
            {userData?.verifiedStatus?"Verified":"Not Verified"}
            
        </h2>
        <h2>

             {userData?.longestStreak}
            
        </h2>
    </div>
  )
}

export default UserData;