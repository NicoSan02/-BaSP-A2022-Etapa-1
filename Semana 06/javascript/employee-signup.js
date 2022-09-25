//FIRST NAME VALIDATION
var createButton = document.getElementById("create-button");
var firstName = document.getElementById('formname');
var firstNameValue = document.getElementById('formname').value;

function validateTxt (){
var txtPattern = (/^[A-Za-z]+$/);
if (firstName.value.match(txtPattern)) {
    return true;
} else {
    return false;
}
}

firstName.onblur = function() {
    if (firstName.value == ''){
    firstName.classList.add("red-border");
    alert('First Name field is required');
} else if (firstName.value.length < 3){
    firstName.classList.add("red-border");
    alert('First name minimum: 3 characters');
} else if (validateTxt = false){
    alert('First Name must contain only letters');
} else {
    alert('Valid First Name');
    firstName.classList.remove("red-border");
    firstName.classList.add("green-border");
}
}

// LAST NAME VALIDATION
var lastName = document.getElementById('formlastname');
var lastNameValue = document.getElementById('formlastname').value;

lastName.onblur = function() {
    if (lastName.value == ''){
    lastName.classList.add("red-border");
    alert('Last Name field is required');
} else if (lastName.value.length < 3){
    lastName.classList.add("red-border");
    alert('Last name minimum: 3 characters');
} else if (validateTxt = false){
    alert('Last Name must contain only letters');
} else {
    alert('Valid Last Name');
    lastName.classList.remove("red-border");
    lastName.classList.add("green-border");
}
}

// ID VALIDATION
var idDoc = document.getElementById('formiddocument');
var idDocValue = document.getElementById('formiddocument').value;
function validateNum (){
    var numPattern = /^[0-9]+$/;
    if (idDoc.value.match(numPattern)) {
        return true;
    } else {
        return false;
    }
}
idDoc.onblur = function() {
    if (idDoc.value == ''){
    idDoc.classList.add("red-border");
    alert('ID field is required');
} else if (idDoc.value.length < 7){
    idDoc.classList.add("red-border");
    alert('ID minimum: 7 characters');
} else if (validateNum = false){
    alert('ID must contain only numbers');
} else {
    alert('Valid ID');
    idDoc.classList.remove("red-border");
    idDoc.classList.add("green-border");
}
}

//BIRTH DATE VALIDATION
var birthDate = document.getElementById('formbirthdate');
function validateDate (){
var datePattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/; //not working
if (birthDate.value.match(datePattern)) {
    return true;
} else {
    return false;
}
}
birthDate.onblur = function() {
    if (birthDate.value == ''){
    birthDate.classList.add("red-border");
    alert('Birth Date field is required');
} else if (validateDate = false){
    alert('Invalid Birth Date format');
} else {
    alert('Valid Birth Date');
    birthDate.classList.remove("red-border");
    birthDate.classList.add("green-border");
}
}

//PHONE NUMBER VALIDATION
var phoneNum = document.getElementById('formphone');

function validatePhone (){
    var phonePattern = [0-9]; //not working
    if (phoneNum.value.match(phonePattern)) {
        return true;
    } else {
        return false;
    }
}

phoneNum.onblur = function() {
    if (phoneNum.value == ''){
    phoneNum.classList.add("red-border");
    alert('Phone number field is required');
} else if (validatePhone = false){
    alert('Invalid Phone Number format');
}  else if (phoneNum.value.length < 10){
    phoneNum.classList.add("red-border");
    alert('Phone Number minimum: 10 numbers');
        return false;
} else {
    alert('Valid Phone Number');
    phoneNum.classList.remove("red-border");
    phoneNum.classList.add("green-border");
    return true;
}
}

//

createButton.onclick = function(e) {
    e.preventDefault();
    console.log(birthDate.value);
}