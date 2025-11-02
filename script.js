const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkInput();
});
email.addEventListener("input",()=>{
    clearMessage(email);
});
password.addEventListener("input", ()=>{
    clearMessage(password);
});
function clearMessage(email){
    const small = email.parentElement.querySelector("small");
    small.innerText = "";
}
function checkInput(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if(emailValue === ""){
        setError(email, "Email can't be empty");
    }
    else if(!isValidEmail(emailValue)){
        setError(email, "Enter the valid email address.")
    }
    else{
        setSuccess(email, "Email has been registered.")
    }
    if(passwordValue === ""){
        setError(password, "Password can't be empty");
    }
    else if(!isValidPassword(passwordValue)){
        setError(password, "Password can't be less than 8 characters.")
    }
    else{
        setSuccess(password, "Password has been set.");
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
    small.style.display = "block";
}
function isValidEmail(email){
    return /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
function isValidPassword(password){
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}