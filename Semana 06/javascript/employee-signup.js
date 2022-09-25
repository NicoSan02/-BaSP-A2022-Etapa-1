//FIRST NAME VALIDATION
var createButton = document.getElementById("create-button");
var firstName = document.getElementById('formname');
var firstNameValue = document.getElementById('formname').value;

function validateTxt(){
txtPattern = /^[a-zA-Z]$/;
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
} else if (!validateTxt()){
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
} else if (!validateTxt()){
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
    numPattern = /^[0-9]+$/;
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
} else if (!validateNum()){
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
datePattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/; //not working
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
} else if (!validateDate()){
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
    phonePattern = [0-9];
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
} else if (!validatePhone()){
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

//ADDRESS VALIDATION
var address = document.getElementById('formaddress');
function validateAddress (){
    addressPattern = /^[0-9a-zA-Z]+$/; //space
    if (address.value.match(addressPattern)) {
        return true;
    } else {
        return false;
    }
}
address.onblur = function() {
    if (address.value == ''){
    address.classList.add("red-border");
    alert('Address field is required');
} else if (address.value.length < 5){
    address.classList.add("red-border");
    alert('Address minimum: 5 characters');
} else if (!validateAddress()){
    alert('Invalid Address format');
} else {
    alert('Valid Address');
    address.classList.remove("red-border");
    address.classList.add("green-border");
}
}

//CITY VALIDATION
var city = document.getElementById('formcity');
function validateCity (){
    cityPattern = /^[0-9a-zA-Z]+$/;
    if (address.value.match(addressPattern)) {
        return true;
    } else {
        return false;
    }
}
city.onblur = function() {
    if (city.value == ''){
    city.classList.add("red-border");
    alert('City field is required');
} else if (city.value.length < 5){
    city.classList.add("red-border");
    alert('City field minimum: 5 characters');
} else if (!validateCity()){
    alert('Invalid City format');
} else {
    alert('Valid city');
    city.classList.remove("red-border");
    city.classList.add("green-border");
}
}
//POSTAL CODE VALIDATION
var postalCode = document.getElementById('formpostal-code');
function validatePostalCode (){
    numPattern = /^[0-9]+$/;
    if (postalCode.value.match(numPattern)) {
        return true;
    } else {
        return false;
    }
}
postalCode.onblur = function() {
    if (postalCode.value == ''){
    postalCode.classList.add("red-border");
    alert('Postal Code field is required');
} else if (postalCode.value.length < 4 || postalCode.value.length > 5){
    postalCode.classList.add("red-border");
    alert('Postal Code field: 4 or 5 characters');
} else if (!validatePostalCode()){
    alert('Invalid Postal Code format');
} else {
    alert('Valid Postal Code');
    postalCode.classList.remove("red-border");
    postalCode.classList.add("green-border");
}
}
//EMAIL VALIDATION
var email = document.getElementById('formemail');
function validateEmail (){
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (email.value.match(emailExpression)) {
        return true;
    } else {
        return false;
    }
}
email.onblur = function() {
    if (email.value == ''){
    email.classList.add("red-border");
    alert('Email field is required');
} else if (!validatePostalCode()){
    alert('Invalid Email format');
} else {
    alert('Valid Email');
    email.classList.remove("red-border");
    email.classList.add("green-border");
}
}
//PASSWORD VALIDATION
var password = document.getElementById('formpassword');
function validateEmail (){
var passPattern = /^[0-9a-zA-Z]+$/;
    if (password.value.match(passPattern)) {
        return true;
    } else {
        return false;
    }
}
password.onblur = function() {
    if (password.value == ''){
    password.classList.add("red-border");
    alert('Password field is required');
} else if (password.value.length < 8){
    password.classList.add("red-border");
    alert('Password field minimum: 8 characters');
} else if (!validatePostalCode()){
    alert('Invalid Password format');
} else {
    alert('Valid Password');
    password.classList.remove("red-border");
    password.classList.add("green-border");
}
}
//REPEAT PASSWORD VALIDATION
var passwordRepeat = document.getElementById('formrepeatpassword');
function validateEmail (){
var passPattern = /^[0-9a-zA-Z]+$/;
    if (passwordRepeat.value.match(passPattern)) {
        return true;
    } else {
        return false;
    }
}
passwordRepeat.onblur = function() {
    if (passwordRepeat.value == ''){
    passwordRepeat.classList.add("red-border");
    alert('Password field is required');
} else if (passwordRepeat.value.length < 8){
    passwordRepeat.classList.add("red-border");
    alert('Password field minimum: 8 characters');
} else if (!validatePostalCode()){
    alert('Invalid Password format');
} else if (passwordRepeat != password){
    alert('Passwords must be the same')
} else {
    alert('Valid Password');
    passwordRepeat.classList.remove("red-border");
    passwordRepeat.classList.add("green-border");
}
}
createButton.onclick = function(e) {
    e.preventDefault();
    console.log(birthDate.value);
}