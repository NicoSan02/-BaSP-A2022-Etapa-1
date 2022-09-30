
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
function validateAll() {
    return validateEmail(email.value) && validatePass(password.value) && password.value.length > 7;
  }
  var emailData = 'rose@radiumrocket.com'
  var passData = 'BaSP2022'
  var urlWithQP = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email' + emailData + '&password' + passData

  function submitInfo() {
    if (validateAll	()) {
      fetch(urlWithQP) 
      .then (function (response) {
        return response.json();
      })
      .then (function (data) {
        if(data.success){
          console.log(data);
          var succesAlert = data.msg + '\n' + successMessage;
          alert(succesAlert);
        } else {
          alert('Error')
        }
      })
      .catch (function(error) {
        alert('Not found');
      });
    } else {
      alert('Rejected '+ successMessage);
    }
  }

// alertMessage = errorMessage + successMessage;
// loginButton.onclick = function() {
//     alert(errorMessageEmail + errorMessagePassword + successMessage);
// }

