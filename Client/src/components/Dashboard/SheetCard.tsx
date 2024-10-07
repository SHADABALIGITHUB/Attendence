
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const SheetCard:React.FC = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="/images/Cards/code1.jpg"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
         Dsa Apna College
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Here i use The started Dsa Question only 
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share(* in Future) </Button>
      <Button size="small"> Open </Button>
    </CardActions>
  </Card>
  )
}

export default SheetCard;


