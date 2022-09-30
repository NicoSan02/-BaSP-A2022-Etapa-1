
var form = document.getElementById("login-form");
var email = document.getElementById("formemail");
var loginButton = document.getElementById("login-button");
var emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var password = document.getElementById('formpassword');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var errorMessageEmail = '';
var errorMessagePassword = '';
var alertMessage = '';
var successMessage = '';

function validateEmail (){
    if (email.value.match(emailPattern)) {
        return true;
    } else {
        return false;
    }
}
email.onblur = function() {
    email.classList.add("green-border");
    if (email.value == '' || !validateEmail()){
    emailError.setAttribute("style", "display: block");
    // console.log('Invalid Email');
    email.classList.add("red-border");
// } else if (!validateEmail()){
//     // console.log('Invalid Email');
//     emailError.setAttribute("style", "display: block");
//     email.classList.add("red-border");
} else {
    console.log('Valid Email');
    email.classList.remove("red-border");
    email.classList.add("green-border");
}
}
email.onfocus = function() {
    email.classList.remove("green-border");
    email.classList.remove("red-border");
    emailError.setAttribute("style", "display: none");
}
function validatePass (){
var passPattern = /^[0-9a-zA-Z]/;
    if (password.value.match(passPattern)) {
        return true;
    } else {
        return false;
    }
}
password.onblur = function() {
    if (password.value == ''){
    passwordError.setAttribute("style", "display: block");
    password.classList.add("red-border");
} else if (password.value.length < 8){
    passwordError.setAttribute("style", "display: block");
    password.classList.add("red-border");
} else if (!validatePass()){
    passwordError.setAttribute("style", "display: block");
    password.classList.add("red-border");
} else {
    console.log('Valid Password')
    password.classList.remove("red-border");
    password.classList.add("green-border");
}
}
password.onfocus = function() {
    password.classList.remove("green-border");
    password.classList.remove("red-border");
    passwordError.setAttribute("style", "display: none");
}
//ALERT 
loginButton.addEventListener("click", function() {
     if (email.value == '' || !validateEmail()) {
    errorMessageEmail = ' Invalid Email ';
} else if (password.value == '' || (!validatePass()) ){
    errorMessagePassword =' Invalid Password ';
// } else if ((password.value == '' || (!validatePass()) && (email.value == '' || (!validateEmail())))){
//     errorMessage = 'Invalid Password and Invalid Email';
} else {
    errorMessageEmail = '';
    errorMessagePassword = '';
    successMessage = ' Email: ' + email.value + ' Password: ' + password.value;
}})
loginButton.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(email.value);
}
)
// alertMessage = errorMessage + successMessage;
loginButton.onclick = function() {
    alert(errorMessageEmail + errorMessagePassword + successMessage);
}

