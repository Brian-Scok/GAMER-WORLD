const cont = document.querySelector(".cont");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click",()=>{
   cont.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
   cont.classList.add("toggle");
});