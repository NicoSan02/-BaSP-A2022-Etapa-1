
var form = document.getElementById("login-form");
var email = document.getElementById("formemail");
var submitButton = document.getElementById("continue-button");
var emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var password = document.getElementById('formpassword');
var passPattern = //letters and numbers (make function)

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
    email.classList.add("red-border");
    alert('Email field is required');
} else if (!validateEmail()){
    alert('Invalid Email format');
} else {
    alert('Valid Email');
    email.classList.remove("red-border");
    email.classList.add("green-border");
}
}
submitButton.onclick = function(e) {
    e.preventDefault();
    console.log(email.value);
}
