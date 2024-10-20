import React, {useContext, useState } from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {style} from '../../styles/login';
import FetchInstance from '../../fetchInstance/Fetch';
import ImageInput from '../Imageuploader/ImageInput';
import {UserSheetsDataContext} from '../../context/UserSheets';

const CreateSheet:React.FC = () => {
   const navigate=useNavigate();

   
  const {refreshSheets}=useContext(UserSheetsDataContext);
   const [sheettitle,setSheetTittle]=useState<string>('');
   const [selectedImage, setSelectedImage] = useState<string|null>(null);
   const [imageName, setImageName] = useState('');
   
   const useremail=sessionStorage.getItem('email');
  
     
   

    const handle=async (e:React.FormEvent<HTMLFormElement>)=>{

         e.preventDefault();
 
      //   console.log({"name":imageName,image:selectedImage});
        
      const RandomImage = [
         "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1728817056~exp=1728820656~hmac=ebb0659c00fdc394b89b5805c2bbd62a1368dd1854e7c2beffd130a8bbab8312&w=1380"
     ];
     let randomIndex = Math.floor(Math.random() * RandomImage.length);  
    
      let UrlFromCloud = RandomImage[randomIndex];

        try{
          const UploadeImage= await FetchInstance('/api/sheet/image',{
            method:"POST",
            body:JSON.stringify({name:imageName,image:selectedImage})
          })

         
          

            
         if(UploadeImage.status){
           
            UrlFromCloud=UploadeImage.url;
            setSelectedImage(null);
            setImageName("");
         }
         
           const AddSheetTodatabase= await FetchInstance('/api/sheet/user',{
             method:"POST",
             body:JSON.stringify({title:sheettitle,useremail:useremail,sheetImg:UrlFromCloud})


           })

           if(AddSheetTodatabase.status){

              refreshSheets();  
              navigate('/dashboard');

           }

        


           

           
        }
        catch(err){

            
           console.log("error",err);
          

        }

        




      
    }
  
  return (

      <Box
      onSubmit={(e)=>{handle(e)}}
      component='form'
      noValidate
      autoComplete='off'
      sx={style}

       >

<Typography variant='h4' sx={ { color: '#068fb4',fontSize:{xs:'20px',sm:'30px',md:'30px'} }}  component='h6' gutterBottom> Create Sheet </Typography>
       

      
       <TextField name="title" onChange={(e)=>{setSheetTittle(e.target.value)}} type='text' label="Sheet Title" variant="outlined" fullWidth  required  />
       <ImageInput selectedImage={selectedImage}  setSelectedImage={setSelectedImage} imageName={imageName} setImageName={setImageName}/>    
   

       <Button type='submit' variant="contained" sx={{maxWidth:'300px',minWidth:'100px'}}> Create Sheet</Button>
        



     
       
    
      </Box>
  )
}

export default CreateSheet;