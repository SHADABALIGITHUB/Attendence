import * as React from 'react';

import TextField from '@mui/material/TextField';
import { Box, styled } from '@mui/system';
import { Button } from '@mui/material';

export default function OTPInput() {
  const [otp, setOtp] = React.useState<String[]>(new Array(4).fill(''));
 
  
//    submit logic 
    const onVerify=()=>{

         console.log(otp.join(''));

    }



    //   otp form
  

  const handleOnChange=(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,index:number)=>{
     const Value=event.target.value;
       
  
      if(otp[index].length==1){
         
      }
    
      if(Value.length > 1){
         return ;
      }

      if(!/^[0-9]$/.test(Value[Value.length-1])){
        event.target.value = Value.slice(0, -1);
        return ;
      }
      setOtp(prev=>{
        const newValue=[...prev];
        newValue[index]=Value;
        return newValue;

    });

     if (Value !== '' && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          (nextInput as HTMLInputElement).focus();
        }
      }
    
     

  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>,index:number) => {

    if (event.key === 'Backspace') {
      
       setOtp(prev=>{
          const newArray=[...prev];
           newArray[index]='';
           return newArray;
       });

       if(index > 0){
          
       const prevInput = document.getElementById(`otp-input-${index - 1}`);
       if (prevInput) {
         (prevInput as HTMLInputElement).focus();
       }
        }
      
      
    }
    
    
  };

  const handlePaste=(event:React.ClipboardEvent<HTMLDivElement>)=>{

    event.preventDefault();
    const clipboardData = event.clipboardData;

    // Check if there is text data in the clipboard
    if (clipboardData.types.includes('text/plain')) {
      let pastedText = clipboardData.getData('text/plain');
      pastedText = pastedText.substring(0, 4).trim();
        
      if (!/^\d+$/.test(pastedText)) {
        // If it's not a valid numeric string, stop the paste action
        event.preventDefault();
        return;
      }
      const charArray = pastedText.split(''); // or [...pastedText]
           // Now you have an array of characters
            setOtp(charArray); 
      

   
      
    }
          
  }

  return (
    <Box sx={{ display: 'flex',flexDirection:'column', gap: 2 ,color:'black'}}>
        <div style={{display:'flex',gap:'15px'}}>

        {otp.map((value, index) => (
        <InputElement
          key={index}
          id={`otp-input-${index}`}
          value={value}
          onPaste={(e) => handlePaste(e)} // Assuming handlePaste is defined
          onKeyDown={(e) => handleKeyDown(e, index)}
          onChange={(event) => handleOnChange(event, index)}
        />
      ))}
      </div>
     <Button onClick={onVerify}>Verify</Button>
    </Box>
  );
}

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const InputElement = styled(TextField)(
  ({ theme }) => `
  width: 40px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);
