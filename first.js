let signUpBtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signinbtn");
let title = document.querySelector(".title");
let nameField = document.querySelector(".namefield");
let underLine = document.querySelector(".underline");
let text = document.querySelector(".text");


signInBtn.addEventListener('click',()=>{
    
    title.innerHTML='Sign In';
    underLine.style.transform='translateX(35px)';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    nameField.style.maxHeight='0';
    text.innerHTML="Forgot Password";
    
    
});

signUpBtn.addEventListener('click',()=>{
   
    title.innerHTML="Sign Up";
    underLine.style.transform='translateX(0px)';
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
    nameField.style.maxHeight="60px";
    text.innerHTML="Password Suggestions";
    
});
