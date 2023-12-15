
const login_teacher=document.querySelector(".login_teacher");
const login_student=document.querySelector(".login_student");
const shift_btn=document.querySelector(".shift");
const shift_btn_student=document.querySelector(".shift_student");


shift_btn.addEventListener("click",()=>{


    setTimeout(function() {
        
       login_teacher.style.top="400px";
       

  }, 200);


  setTimeout(()=>{

      login_student.style.display="flex";

   },400)

    

    setTimeout(function() {
      login_teacher.style.display="none";
     
     login_student.style.top="0";
    

          }, 600);
 })

shift_btn_student.addEventListener("click",()=>{

setTimeout(function() {
        
  login_student.style.top="400px";
  // login_student.style.opacity="0.3";

}, 200);

setTimeout(()=>{

  login_teacher.style.display="flex";

},500)

setTimeout(function() {

 login_student.style.display="none";

login_teacher.style.top="0";

login_teacher.style.display="flex";

     }, 600);
})
 


