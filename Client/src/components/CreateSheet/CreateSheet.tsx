import React, { useState } from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {style} from '../../styles/login';
import FetchInstance from '../../fetchInstance/Fetch';

const CreateSheet:React.FC = () => {
   const navigate=useNavigate();

   const [sheettitle,setSheetTittle]=useState<string>('');
   const [sheetImg,setSheetImg]=useState<string>('');
   const useremail=sessionStorage.getItem('email');

    const handle=async ()=>{
     
     
        try{

          
           const AddSheetTodatabase= await FetchInstance('/api/sheet/user',{
             method:"POST",
             body:JSON.stringify({title:sheettitle,useremail:useremail})

           })

           if(AddSheetTodatabase.status){
             
              navigate('/dashboard');
           }

        


           

           
        }
        catch(err){

           console.log("error",err);

        }

        




      
    }
  
  return (

      <Box
      onSubmit={handle}
      component='form'
      noValidate
      autoComplete='off'
      sx={style}

       >

<Typography variant='h4' sx={ { color: '#068fb4',fontSize:{xs:'20px',sm:'30px',md:'30px'} }}  component='h6' gutterBottom> Create Sheet </Typography>
       
      
      
       <TextField name="title" onChange={(e)=>{setSheetTittle(e.target.value)}} type='text' label="Sheet Title" variant="outlined" fullWidth  required  />
       


       <Button type='submit' variant="contained" sx={{maxWidth:'300px',minWidth:'100px'}}> login </Button>
        



     
       
    
      </Box>
  )
}

export default CreateSheet;