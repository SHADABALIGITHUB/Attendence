import React from 'react'
import { useContext } from 'react';
import { AuthStatus } from '../../context/Auth';

const CreateSheet:React.FC = () => {
    const {authStatus}=useContext(AuthStatus);

      console.log(authStatus);
  return (
    <div>CreateSheet</div>
  )
}

export default CreateSheet