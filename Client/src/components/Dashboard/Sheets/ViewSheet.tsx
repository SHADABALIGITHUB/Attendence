import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ViewSheet:React.FC = () => {

     const location=useLocation();
     const sheetid:number=location.state?.sheetid;

     useEffect(()=>{

         
         
         

     },[])
    
  
  return (
    <div>

        Welcome to View Sheet {sheetid}
      
    </div>
  )
}


export default ViewSheet
