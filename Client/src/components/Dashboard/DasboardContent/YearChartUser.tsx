import { Box, Typography } from '@mui/material';
import './ContributionChart.css'; // Import your CSS styles

const ContributionChart = () => {
//   const month = 10; // October
  const year = 2023;

  // Get the number of days in October 2023
  const totalDays = new Date(year).getDate(); 

  // console.log("total",totalDays);
  // 0 gives the last day of the previous month
  const contributionData = new Array(totalDays).fill(0); 
  // console.log(contributionData.length)
  // Initialize with zeros for no contributions

  // Add empty squares for days of the month before the first day of October
//   const daysBefore = new Date(year, month - 1, 1).getDay(); // Get the day of the week for the 1st of October
//   const totalSquares = daysBefore + totalDays; // Total squares to display

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Contributions for October 2023
      </Typography>
      <Box className="contribution-chart">
        {/* Empty squares before the month starts */}
        {/* {Array.from({ length: daysBefore }, (_, index) => (
          <Box key={`empty-${index}`} className="square intensity-0" />
        ))} */}

        {/* Squares for each day in October */}
        {contributionData.map((contribution, index) => (
          <Box
            key={index}
            className="square intensity-0" // All squares will have intensity 0
            title={`October ${index + 1}, 2023: ${contribution} contributions`} // Tooltip showing the date
          />
        ))}
      </Box>
    </Box>
  );
};

export default ContributionChart;
