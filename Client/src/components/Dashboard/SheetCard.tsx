
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  { UserSheetType } from './Dashboard';
import { useNavigate } from 'react-router-dom';
interface SheetCardProps {
  data: UserSheetType; 
  SheetType:string;

 
}
const SheetCard:React.FC<SheetCardProps> = ({SheetType,data}) => {
   const navigate=useNavigate();
  return (
    <Card sx={{ maxWidth: 345,minWidth:280 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={data.sheetImg?data.sheetImg:'./images/Cards/code1.jpg'}
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
      
      <Button size="small" onClick={()=>{ navigate('/view-sheet',{ state: { Listquestion:data.Listquestion} })}  }> Open </Button>

      {SheetType==='MySheet'?<Button size="small"  onClick={()=>{ navigate('/create-sheet-table',{state:{sheetid:data.sheetid}})}} > Add Questions  </Button> : localStorage.getItem('email')===import.meta.env.VITE_ADMIN_EMAIL?<Button size="small"  onClick={()=>{ navigate('/create-sheet-table',{state:{sheetid:data.sheetid,sheetType:SheetType}})}} > Add Questions  </Button>:<Button disabled={true} > Add Questions  </Button> }
    </CardActions>
  </Card>
  )
}

export default SheetCard;


