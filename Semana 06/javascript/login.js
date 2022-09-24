
var form = document.getElementById("login-form");
var email = document.getElementById("formemail");
var submitButton = document.getElementById("continue-button");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

email.onblur = function() {
    email.classList.add("green-border");
}
submitButton.onclick = function(e) {
    e.preventDefault();
    console.log(email.value);

if (email.value.match(emailExpression)) {
alert("Valid email address!");
email.classList.add("green-border");
}
else
{
alert("You have entered an invalid email address!");
email.classList.add("red-border");
}
}