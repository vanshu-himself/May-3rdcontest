
const signuppage=document.getElementById('Sign-upContainer');
const fullname=document.getElementById('full-name-input');
const email=document.getElementById('email-input');
const password=document.getElementById('password-input');
const confirmPassword=document.getElementById('confirm-password');
//
const signUpBtn=document.getElementById('Sign-up-btn');
const logOutBtn=document.getElementById('logout-btn');
//
const error=document.getElementById('error');
const loginpage = document.getElementById('login-container');
const loginName=document.getElementById('login-fullname');
const loginEmail=document.getElementById('login-EMail');
const loginPassword=document.getElementById('login-password');

loginpage.style.display="none";
signUpBtn.addEventListener('click',()=>{
    
if(fullname.value=="" || email.value=="" || password.value=="" || confirmPassword.value==""){
    error.textContent="Error : All the fields are mandatory";
    error.style.color="red";
} else if(password.value!=confirmPassword.value){
    error.style.color="red";
    error.textContent="Error : Password do not match";
 
}else{

    signuppage.style.display="none";
    loginpage.style.display="block";
    loginName.value=fullname.value;
    loginEmail.value=email.value;
    loginPassword.value=password.value;
      
}
})

logOutBtn.addEventListener('click',()=>{
  loginpage.style.display="none";
  signuppage.style.display="block";
})

