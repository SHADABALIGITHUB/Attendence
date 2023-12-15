const login_form=document.querySelector('.form1');
const signup_form=document.querySelector('.form2');



const hamburger=document.querySelector('.menu-toggle');
const sidebar=document.querySelector('.anchor');
const form_rap=document.querySelector('.form_rap');
const newuser=document.querySelector('.signup_firsttime');        



function d(){
    login_form.style.display="none";
    signup_form.style.display="block";
}

hamburger.addEventListener("click",()=>{

   

       if(sidebar.style.display=='block'){
           
           sidebar.style.display="none";
           
       }
       else{
        sidebar.style.display="block";
        
       }



})

form_rap.addEventListener("click",()=>{
    if(sidebar.style.display=='block'){
        sidebar.style.display='none';

        
    }
})





newuser.addEventListener("click",d);    



    