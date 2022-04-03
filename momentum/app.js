const loginForm = document.querySelector(".login-form");
const loginFormInput = loginForm.querySelector("input");  
const greeting = document.querySelector(".greeting-title");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username"


function greetingControl(username){
  greeting.innerText += `Hello ${username}! Welcome!`;
  greeting.classList.remove(HIDDEN_CLASS);
}


function handleLoginFormInputSubmit(event){
  event.preventDefault();  
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginFormInput.value;
  localStorage.setItem(USERNAME_KEY, username);  
  greetingControl(username);
}


const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASS);  
  loginForm.addEventListener("submit", handleLoginFormInputSubmit);
}
else{
  greetingControl(savedUserName);
}








