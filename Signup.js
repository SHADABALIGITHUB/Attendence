
const teacher_portal=document.querySelector(".signup_teacher");
const student_portal=document.querySelector(".signup_Student");
const down_btn=document.querySelector(".down");
const up_btn=document.querySelector(".up");


down_btn.addEventListener("click",()=>{


    setTimeout(function() {
        
       teacher_portal.style.top="400px";
       

  }, 200);


  setTimeout(()=>{

      student_portal.style.display="flex";

   },400)

    

    setTimeout(function() {
      teacher_portal.style.display="none";
     
     student_portal.style.top="0";
    

          }, 600);
 })

up_btn.addEventListener("click",()=>{

setTimeout(function() {
        
  student_portal.style.top="400px";
  // student_portal.style.opacity="0.3";

}, 200);

setTimeout(()=>{

  teacher_portal.style.display="flex";

},500)

setTimeout(function() {

 student_portal.style.display="none";

teacher_portal.style.top="0";

teacher_portal.style.display="flex";

     }, 600);
})
 