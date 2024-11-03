import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import YearChartUser from './YearChartUser'
import Streak from './Streak'
import DefaultSheetCompletedStats from './DefaultSheetCompletedStats';
import UserData from '../UserProfile/UserData';
const DashboardContent:React.FC = () => {
    const [streak,setStreak]=useState(localStorage.getItem("currentstreak"));
   

      useEffect(()=>{

        const lastActivityDate = localStorage.getItem('currentstreakDate')?.split('T')[0];

        const today = new Date();
        const lastDate = new Date(lastActivityDate?lastActivityDate:'');
        // console.log(today);
        // console.log("My",lastDate);
        const differenceInTime = today.getTime() - lastDate.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);


        if (differenceInDays === 1) {
          //  console.log("working")
          // If the last activity was exactly one day ago, increment the streak
          setStreak(streak?streak+1:"2");
        } else if (differenceInDays > 1) {
          // If the last activity was more than one day ago, reset the streak
          setStreak("2")
        }
    
          
          // const currentStreak=localStorage.getItem('currentstreak');
          // console.log(currentStreak);
          // const currentstreakDate=localStorage.getItem('currentstreakDate');
          // const you=currentstreakDate?.split('T')[0].split('-')[2];
          // const world= String(new Date().getDate());
          // if(you==world){
          //   return;
          // }
          // else if(you){

          // }



          
          

      })

  return (
     <Box sx={{backgroundColor:'',width:'100%',height:'100vh',marginTop:'100px',display:'flex',position:'relative',flexDirection:'column'}}>
       
          <DefaultSheetCompletedStats/>

          <UserData/>
         
          <Streak currentStreak={streak?streak:"1"} highestStreak={localStorage.getItem('Longeststreak')} />
           <Box sx={{position:'absolute' ,bottom:'50px',width:'100%',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',overflowX:{xs:"scroll",md:"hidden"}}}>
            <h2>  Start contibuting Daily in Sheets </h2>
            <YearChartUser/>
          </Box>
      
    </Box>
  )
}

export default DashboardContent
