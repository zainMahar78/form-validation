const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkInput();
});
function checkInput(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if(emailValue=== ""){
        setError(email, "Email can't be empty.")
    }
    else if(!isValidEmail(emailValue)){
        setError(email, "Enter valid email address.");
    }
    else{
        setSuccess(email, "Email has been set.")
    }
    if(passwordValue === ""){
        setError(password, "Password can't be empty.");
    }
    else if(passwordValue.length < 8){
        setError(password, "Password should be greater than 8 characters.");
    }
    else{
        setSuccess(password, "Password has be set.");
    }
}
function setError(input, message){
    const errorShow = input.parentElement;
    const small = errorShow.querySelector("small");
    small.innerText = message;
}
function setSuccess(input, message){
    const showSuccess = input.parentElement;
    const small = showSuccess.querySelector("small");
    small.innerText = message;
}
function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}