//FIRST NAME VALIDATION
var createButton = document.getElementById("create-button");
var firstName = document.getElementById('formname');
var firstNameValue = document.getElementById('formname').value;
var nameError = document.getElementById('name-error');
var lastNameError = document.getElementById('lastname-error');
var idError = document.getElementById('id-error');
var birthDateError = document.getElementById('birth-date-error');
var phoneError = document.getElementById('phone-error');
var addressError = document.getElementById('address-error');
var locationError = document.getElementById('location-error');
var postalCodeError = document.getElementById('postal-code-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var passwordRepeatError = document.getElementById('repeat-password-error');

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
    nameError.setAttribute("style", "display: block");
    firstName.classList.add("red-border");
} else if (firstName.value.length < 3){
    firstName.classList.add("red-border");
    // alert('First name minimum: 3 characters');
} else if (!validateTxt()){
    // alert('First Name must contain only letters');
} else {
    console.log('Valid First Name');
    firstName.classList.remove("red-border");
    firstName.classList.add("green-border");
}
firstName.onfocus = function() {
    firstName.classList.remove("green-border");
    firstName.classList.remove("red-border");
    nameError.setAttribute("style", "display: none");
}
}
// LAST NAME VALIDATION
var lastName = document.getElementById('formlastname');
var lastNameValue = document.getElementById('formlastname').value;

lastName.onblur = function() {
    if (lastName.value == ''){
    lastNameError.setAttribute("style", "display: block");
    lastName.classList.add("red-border");
} else if (lastName.value.length < 3){
    lastNameError.setAttribute("style", "display: block");
    lastName.classList.add("red-border");
    // alert('Last name minimum: 3 characters');
} else if (!validateTxt()){
    lastNameError.setAttribute("style", "display: block");
    // alert('Last Name must contain only letters');
} else {
    alert('Valid Last Name');
    lastName.classList.remove("red-border");
    lastName.classList.add("green-border");
}
}
lastName.onfocus = function() {
    lastName.classList.remove("green-border");
    lastName.classList.remove("red-border");
    lastNameError.setAttribute("style", "display: none");
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
    idError.setAttribute("style", "display: block");
    idDoc.classList.add("red-border");
} else if (idDoc.value.length < 7){
    idError.setAttribute("style", "display: block");
    idDoc.classList.add("red-border");
    // alert('ID minimum: 7 characters');
} else if (!validateNum()){
    idError.setAttribute("style", "display: block");
    // alert('ID must contain only numbers');
} else {
    alert('Valid ID');
    idDoc.classList.remove("red-border");
    idDoc.classList.add("green-border");
}
}
idDoc.onfocus = function() {
    idDoc.classList.remove("green-border");
    idDoc.classList.remove("red-border");
    idError.setAttribute("style", "display: none");
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
    birthDateError.setAttribute("style", "display: block");
    birthDate.classList.add("red-border");
} else if (!validateDate()){
    birthDateError.setAttribute("style", "display: block");
    // alert('Invalid Birth Date format');
} else {
    console.log('Valid Birth Date');
    birthDate.classList.remove("red-border");
    birthDate.classList.add("green-border");
}
}
birthDate.onfocus = function() {
    birthDate.classList.remove("green-border");
    birthDate.classList.remove("red-border");
    birthDateError.setAttribute("style", "display: none");
}
//PHONE NUMBER VALIDATION
var phoneNum = document.getElementById('formphone');

function validatePhone (){
var phonePattern = [0-9];
    if (phoneNum.value.match(phonePattern)) {
        return true;
    } else {
        return false;
    }
}
phoneNum.onblur = function() {
    if (phoneNum.value == ''){
    phoneError.setAttribute("style", "display: block");
    phoneNum.classList.add("red-border");
} else if (!validatePhone()){
    phoneError.setAttribute("style", "display: block");
}  else if (phoneNum.value.length < 10){
    phoneError.setAttribute("style", "display: block");
    phoneNum.classList.add("red-border");
    // alert('Phone Number minimum: 10 numbers');
        return false;
} else {
    console.log('Valid Phone Number');
    phoneNum.classList.remove("red-border");
    phoneNum.classList.add("green-border");
    return true;
}
}
phoneNum.onfocus = function() {
    phoneNum.classList.remove("green-border");
    phoneNum.classList.remove("red-border");
    phoneError.setAttribute("style", "display: none");
}
//ADDRESS VALIDATION
var address = document.getElementById('formaddress');
function validateAddress (){
    addressPattern = /^["a-zA-Z"0-9 ]/;
    if (address.value.match(addressPattern)) {
        return true;
    } else {
        return false;
    }
}
address.onblur = function() {
    if (address.value == ''){
    addressError.setAttribute("style", "display: block");
    address.classList.add("red-border");
} else if (address.value.length < 5){
    addressError.setAttribute("style", "display: block");
    address.classList.add("red-border");
    // alert('Address minimum: 5 characters');
} else if (!validateAddress()){
    addressError.setAttribute("style", "display: block");
    // alert('Invalid Address format');
} else {
    console.log('Valid Address');
    address.classList.remove("red-border");
    address.classList.add("green-border");
}
}
address.onfocus = function() {
    address.classList.remove("green-border");
    address.classList.remove("red-border");
    addressError.setAttribute("style", "display: none");
}
//LOCATION VALIDATION
var locat = document.getElementById("formlocation");
function validatelocat (){
    locatPattern = /^[0-9a-zA-Z]+$/;
    if (locat.value.match(locatPattern)) {
        return true;
    } else {
        return false;
    }
}
locat.onblur = function() {
    if (locat.value == ''){
    locationError.setAttribute("style", "display: block");
    locat.classList.add("red-border");
} else if (locat.value.length < 4){
    locationError.setAttribute("style", "display: block");
    locat.classList.add("red-border");
    // alert('locat field minimum: 4 characters');
} else if (!validatelocat()){
    locationError.setAttribute("style", "display: block");
    // alert('Invalid location format');
} else {
    console.log('Valid location');
    locat.classList.remove("red-border");
    locat.classList.add("green-border");
}
}
locat.onfocus = function() {
    locat.classList.remove("green-border");
    locat.classList.remove("red-border");
    locationError.setAttribute("style", "display: none");
}
//POSTAL CODE VALIDATION
var postalCode = document.getElementById('formpostal-code');
function validatePostalCode (){
    numPattern = /^[0-9]/;
    if (postalCode.value.match(numPattern)) {
        return true;
    } else {
        return false;
    }
}
postalCode.onblur = function() {
    if (postalCode.value == ''){
    postalCodeError.setAttribute("style", "display: block");
    postalCode.classList.add("red-border");
} else if (postalCode.value.length < 4 || postalCode.value.length > 5){
    postalCodeError.setAttribute("style", "display: block");
    postalCode.classList.add("red-border");
    // alert('Postal Code field: 4 or 5 characters');
} else if (!validatePostalCode()){
    postalCodeError.setAttribute("style", "display: block");
    // alert('Invalid Postal Code format');
} else {
    console.log('Valid Postal Code');
    postalCode.classList.remove("red-border");
    postalCode.classList.add("green-border");
}
}
postalCode.onfocus = function() {
    postalCode.classList.remove("green-border");
    postalCode.classList.remove("red-border");
    postalCodeError.setAttribute("style", "display: none");
}
//EMAIL VALIDATION
var email = document.getElementById('formemail');
function validateEmail (){
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; //not working
    if (email.value.match(emailExpression)) {
        return true;
    } else {
        return false;
    }
}
email.onblur = function() {
    if (email.value == ''){
    emailError.setAttribute("style", "display: block");
    email.classList.add("red-border");
} else if (!validateEmail()){
    emailError.setAttribute("style", "display: block");
    // alert('Invalid Email format');
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
//PASSWORD VALIDATION
var password = document.getElementById('formpassword');
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
    // alert('Password field minimum: 8 characters');
} else if (!validatePass()){
    passwordError.setAttribute("style", "display: block");
    // alert('Invalid Password format');
} else {
    console.log('Valid Password');
    password.classList.remove("red-border");
    password.classList.add("green-border");
}
}
password.onfocus = function() {
    password.classList.remove("green-border");
    password.classList.remove("red-border");
    passwordError.setAttribute("style", "display: none");
}
//REPEAT PASSWORD VALIDATION
var passwordRepeat = document.getElementById('formrepeatpassword');
function validateRepeatPass (){
var passPattern = /^[0-9a-zA-Z]+$/;
    if (passwordRepeat.value.match(passPattern)) {
        return true;
    } else {
        return false;
    }
}
passwordRepeat.onblur = function() {
    if (passwordRepeat.value == ''){
    passwordRepeatError.setAttribute("style", "display: block");
    passwordRepeat.classList.add("red-border");
} else if (passwordRepeat.value.length < 8){
    passwordRepeatError.setAttribute("style", "display: block");
    passwordRepeat.classList.add("red-border");
    // alert('Password field minimum: 8 characters');
} else if (!validateRepeatPass()){
    passwordRepeatError.setAttribute("style", "display: block");
    // alert('Invalid Password format');
} else if (passwordRepeat != password){
    passwordRepeatError.setAttribute("style", "display: block");
    // alert('Passwords must be the same')
} else {
    console.log('Valid Password');
    passwordRepeat.classList.remove("red-border");
    passwordRepeat.classList.add("green-border");
}
}
passwordRepeat.onfocus = function() {
    passwordRepeat.classList.remove("green-border");
    passwordRepeat.classList.remove("red-border");
    passwordRepeatError.setAttribute("style", "display: none");
}
//ERROR ALERT
// createButton.onclick = function(){
//     if 
// }
createButton.onclick = function(e) {
    e.preventDefault();
    console.log(birthDate.value);
}