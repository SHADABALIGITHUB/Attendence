import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';

interface ImageInputType{
  selectedImage:string|null,
  setSelectedImage:React.Dispatch<React.SetStateAction<string|null>>,
  imageName:string,
  setImageName:React.Dispatch<React.SetStateAction<string>>,
}

const ImageInput:React.FC<ImageInputType> = ({selectedImage,setSelectedImage,imageName,setImageName}) => {
  
 
  
  const handleImageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    
     
    const file = event.target.files?.[0];
   
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(String(reader.result));
        setImageName(file.name);
      };
      reader.readAsDataURL(file);
    }

  };
  
  const Cancel=()=>{
      setSelectedImage('');
      setImageName('');
  }
  

  return (

    <>
     {selectedImage && (
        <Box sx={{ mt: 2 ,position:"relative"}}>
          <Button sx={{position:'absolute',left:'100%'}} onClick={Cancel}>< CloseIcon/> </Button>
          <Typography variant="body2">Image Preview:</Typography>
          <img src={selectedImage} alt="Preview" style={{ maxWidth: '400px', maxHeight: '300px', marginTop: '10px' }} />
        </Box>
      )}
     <TextField
      label="Upload Image"
      variant="outlined"
      value={imageName}
      fullWidth
      slotProps={{
        input:{
        readOnly: true,
        endAdornment:(
          <InputAdornment position="end">
              <Button variant="contained" component="label">
                Browse
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />
              </Button>
            </InputAdornment>
        )
      }
      }}

     >
     
   </TextField>

     

   </>
      
  
  );
};

export default ImageInput;
