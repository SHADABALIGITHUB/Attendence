
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  { UserSheetType } from './DashboardContainer';
import { useNavigate } from 'react-router-dom';
interface SheetCardProps {
  data: UserSheetType; // Accepts an array of UserSheetType
}
const SheetCard:React.FC<SheetCardProps> = ({data}) => {
   const navigate=useNavigate();
  return (
    <Card sx={{ maxWidth: 345,minWidth:280 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={data.sheetid==3?"https://res.cloudinary.com/ddnum51yo/image/upload/v1728586195/Leetcode/DefaultSheet/download_pb5ozu.jpg":'./images/Cards/code1.jpg'}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
         {data.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       Total Question : {data.Listquestion.length}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       Created At : {data.createdAt.slice(0,10)}
      </Typography>
    </CardContent>
    <CardActions>
      
      <Button size="small" onClick={()=>{ navigate('/view-sheet',{ state: { Listquestion:data.Listquestion} })      }  }> Open </Button>
      <Button size="small" onClick={()=>{ navigate('/create-sheet-table')}} > Add Questions  </Button>
    </CardActions>
  </Card>
  )
}

export default SheetCard;


