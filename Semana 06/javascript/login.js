
var form = document.getElementById("login-form");
var email = document.getElementById("formemail");
var loginButton = document.getElementById("continue-button");
var emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var password = document.getElementById('formpassword');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
function validateEmail (){
    if (email.value.match(emailPattern)) {
        return true;
    } else {
        return false;
    }
}
email.onblur = function() {
    email.classList.add("green-border");
    if (email.value == ''){
    emailError.setAttribute("style", "display: block");
    // console.log('Invalid Email');
    email.classList.add("red-border");
} else if (!validateEmail()){
    // console.log('Invalid Email');
    emailError.setAttribute("style", "display: block");
    email.classList.add("red-border");
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
loginButton.onclick - function() {
    if (email.value == '') {
        alert('Invalid Email');
    } else if (!validateEmail()) {
        alert('Invalid Email');
    } else if (password.value == '') {
        alert('Invalid Password');
    } else if (!validatePass()) {
        alert('Invalid Password');
    } else {
        alert('email: ' + email.value + 'password' + password.value);
    }
}

loginButton.onclick = function(e) {
    e.preventDefault();
    console.log(email.value);
}
