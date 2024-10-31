import React, { useEffect, useState } from 'react'
import YearChartUser from './YearChartUser'
import Streak from './Streak'
const DashboardContent:React.FC = () => {
    const [streak,setStreak]=useState(localStorage.getItem("currentstreak"));
   

      useEffect(()=>{

        const lastActivityDate = localStorage.getItem('currentstreakDate')?.split('T')[0];

        const today = new Date();
        const lastDate = new Date(lastActivityDate?lastActivityDate:'');
        console.log(today);
        console.log("My",lastDate);
        const differenceInTime = today.getTime() - lastDate.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);


        if (differenceInDays === 1) {
           console.log("working")
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
    <div style={{marginTop:'50px'}}>

         
          <Streak currentStreak={streak?streak:"1"} highestStreak={localStorage.getItem('Longeststreak')} />
          <h2>  Start contibuting Daily in Sheets </h2>
          <YearChartUser/>
      
    </div>
  )
}

export default DashboardContent
