import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import YearChartUser from './YearChartUser'
import Streak from './Streak'
import DefaultSheetCompletedStats from './DefaultSheetCompletedStats';
// import UserData from '../UserProfile/UserData';
import { AuthStatus } from '../../../context/Auth';
import SmallLoading from '../../Loading/SmallLoading';
const DashboardContent:React.FC = () => {
   
    const {userData}=useContext(AuthStatus);
   

  if(!userData){

      return (
        <>
          <SmallLoading value="Render May Take Time up to 1 minute"/>
        </>
      )

  }

  return (
     <Box sx={{backgroundColor:'',width:'100%',alignItems:'center',minHeight:'100vh',marginTop:{xs:'30px',sm:'100px'},marginBottom:'20px',display:'flex',position:'relative',flexDirection:'column'}}>
       
          <DefaultSheetCompletedStats/>

          {/* <UserData/> */}
         
          <Streak currentStreak={userData.currentStreak[0]} highestStreak={userData?.longestStreak} />
           <Box sx={{bottom:'50px',width:'100%',height:'100%',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',overflowX:{xs:"scroll",md:"hidden"}}}>
            <h2>  Start contibuting Daily in Sheets </h2>
            <YearChartUser contribution={userData.contributions}/>
          </Box>
      
    </Box>
  )
}

export default DashboardContent
