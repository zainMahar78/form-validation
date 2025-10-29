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
    if(emailValue === ""){
        setError(email, "Email can't be empty");
    }
    if(passwordValue === ""){
        setError(password, "Password can't be empty");
    }
    else if(passwordValue.length < 8){
        setError(password, "Password can't be less than 8 characters.")
    }
    else{
        setSuccess(password, "Password has been set.");
    }
}
function setError(input, message){
    const showError = input.parentElement;
    const small = showError.querySelector("small");
    small.innerText = message;
    small.style.display = "block";
}
function setSuccess(input, message){
    const showSuccess = input.parentElement;
    const small = showSuccess.querySelector("small");
    small.innerText = message;
    small.style.display = "block";
}