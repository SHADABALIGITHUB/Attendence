
import { ContributionCalendar } from 'react-contribution-calendar'

const YearChartUser = () => {

  const data:InputData[]=[
    {
      '2024-07-31':{level:2}
    },
    {
      '2024-03-31':{level:4}
    }
  ]
  const now=new Date();
  const year=now.getFullYear();
  
  
  return (
    <ContributionCalendar
       data={data}
       start={`${year}-01-01`}
       end={`${year}-12-31`}
       daysOfTheWeek={['Sun','Mon','Tue','Wed','Thu','Fri','Sat']}
       textColor='#1f2328'
       startsOnSunday={true}
       includeBoundary={true}
       theme="sky"
       cx={10}
       cy={10}
       cr={2}
       
    />
    
  )
}

export default YearChartUser