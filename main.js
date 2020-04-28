const msg = document.querySelector("#msg");
const email = document.querySelector("#email");
const notify = document.querySelector("#btn");
const form = document.querySelector("#form");


//on submit listene for notify button 
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    //email validation 
 if(email.value === '') {
     msg.classList.add('error');
     email.style.border = '1 px solid red';
     msg.innerHTML = 'Whoops! It looks like you forgot to add your email';

     //removal of error or successs msg
     setTimeout(() => msg.remove(), 3000);
 }

 email.value = '';
}

 ///regex for email address
var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkEmail(){
 if(email.value.match(pattern)){
    msg.innerHTML = 'Email Valid';
    msg.style.color = '#008000';
    msg.style.fontWeight = "600";
    return true;
 }

 else {
     msg.classList.add('error');
     msg.innerHTML = 'Please provide a valid email address';
     return false;
 }
   
}
