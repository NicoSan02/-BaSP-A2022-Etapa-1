var createButton = document.getElementById('create-button');
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
var numberCheck = '0123456789';
var textCheck = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú';
var errorMessageName = '';
var errorMessageLastName = '';
var errorMessageId = '';
var errorMessageBirthDate = '';
var errorMessagePhoneNum = '';
var errorMessageAddress = '';
var errorMessageLocation = '';
var errorMessagePostalCode = '';
var errorMessageEmail = '';
var errorMessagePasswordrepeat = '';
var errorMessagePassword = '';
var successMessage = '';
//FIRST NAME VALIDATION
function validateTxt(){
 txtPattern = /^[A-Za-z]+$/;
    if (firstName.value.match(txtPattern)) {
        return true;
    } else {
        return false;
    }
}
firstName.onblur = function() {
if (firstName.value == ''){
    nameError.setAttribute('style', 'display: block');
    firstName.classList.add('red-border');
} else if (firstName.value.length < 3){
    nameError.setAttribute('style', 'display: block');
    firstName.classList.add('red-border');
} else if (!validateTxt()){
    nameError.setAttribute('style', 'display: block');
    firstName.classList.add('red-border');
} else {
    console.log('Valid First Name');
    firstName.classList.remove('red-border');
    firstName.classList.add('green-border');
}
firstName.onfocus = function() {
    firstName.classList.remove('green-border');
    firstName.classList.remove('red-border');
    nameError.setAttribute('style', 'display: none');
}
}
// LAST NAME VALIDATION
var lastName = document.getElementById('formlastname');
var lastNameValue = document.getElementById('formlastname').value;
function validateTxt(){
    for (i = 0; i< lastNameValue.length; i++) {
        if (textCheck.indexOf(text.charAt(i),0)!=-1)
        return true;
    }
    return false;
}
lastName.onblur = function() {
    if (lastName.value == ''){
    lastNameError.setAttribute('style', 'display: block');
    lastName.classList.add('red-border');
} else if (lastName.value.length < 3){
    lastNameError.setAttribute('style', 'display: block');
    lastName.classList.add('red-border');
} else if (!validateTxt()){
    lastNameError.setAttribute('style', 'display: block');
} else {
    alert('Valid Last Name');
    lastName.classList.remove('red-border');
    lastName.classList.add('green-border');
}
}
lastName.onfocus = function() {
    lastName.classList.remove('green-border');
    lastName.classList.remove('red-border');
    lastNameError.setAttribute('style', 'display: none');
}
// ID VALIDATION
var idDoc = document.getElementById('formiddocument');
var idDocValue = document.getElementById('formiddocument').value;
idDoc.onblur = function() {
    if (idDoc.value == ''){
    idError.setAttribute('style', 'display: block');
    idDoc.classList.add('red-border');
} else if (idDoc.value.length < 7){
    idError.setAttribute('style', 'display: block');
    idDoc.classList.add('red-border');
} else if (isNaN(idDocValue)){
    console.log('NaN');
    idError.setAttribute('style', 'display: block');
} else {
    console.log('Valid ID');
    idDoc.classList.remove('red-border');
    idDoc.classList.add('green-border');
}
}
idDoc.onfocus = function() {
    idDoc.classList.remove('green-border');
    idDoc.classList.remove('red-border');
    idError.setAttribute('style', 'display: none');
}
//BIRTH DATE VALIDATION
var birthDate = document.getElementById('formbirthdate');
function validateDate (){
var datePattern = /^\d{2}\-\d{2}\-\d{4}$/;
if (birthDate.value.match(datePattern)) {
    return true;
} else {
    return false;
}
}
birthDate.onblur = function() {
    if (birthDate.value === ''){
    birthDateError.setAttribute('style', 'display: block');
    birthDate.classList.add('red-border');
} else if (!validateDate(birthDate.value)){
    birthDateError.setAttribute('style', 'display: block');
} else {
    console.log('Valid Birth Date');
    birthDate.classList.remove('red-border');
    birthDate.classList.add('green-border');
}
}
birthDate.onfocus = function() {
    birthDate.classList.remove('green-border');
    birthDate.classList.remove('red-border');
    birthDateError.setAttribute('style', 'display: none');
}
//PHONE NUMBER VALIDATION
var phoneNum = document.getElementById('formphone');

phoneNum.onblur = function() {
    if (phoneNum.value === ''){
    phoneError.setAttribute('style', 'display: block');
    phoneNum.classList.add('red-border');
} else if (isNaN(phoneNum.value)){
    console.log('NaN');
    phoneError.setAttribute('style', 'display: block');
}  else if (phoneNum.value.length < 10){
    phoneError.setAttribute('style', 'display: block');
    phoneNum.classList.add('red-border');
        return false;
} else {
    console.log('Valid Phone Number');
    phoneNum.classList.remove('red-border');
    phoneNum.classList.add('green-border');
    return true;
}
}
phoneNum.onfocus = function() {
    phoneNum.classList.remove('green-border');
    phoneNum.classList.remove('red-border');
    phoneError.setAttribute('style', 'display: none');
}
//ADDRESS VALIDATION
var address = document.getElementById('formaddress');
function validateAddress (){
    addressPattern = /^['a-zA-Z'0-9 ]/;
    if (address.value.match(addressPattern)) {
        return true;
    } else {
        return false;
    }
}
address.onblur = function() {
    if (address.value === ''){
    addressError.setAttribute('style', 'display: block');
    address.classList.add('red-border');
} else if (address.value.length < 5){
    addressError.setAttribute('style', 'display: block');
    address.classList.add('red-border');
} else if (!validateAddress(address.value)){
    addressError.setAttribute('style', 'display: block');
} else {
    console.log('Valid Address');
    address.classList.remove('red-border');
    address.classList.add('green-border');
}
}
address.onfocus = function() {
    address.classList.remove('green-border');
    address.classList.remove('red-border');
    addressError.setAttribute('style', 'display: none');
}
//LOCATION VALIDATION
var locat = document.getElementById('formlocation');
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
    locationError.setAttribute('style', 'display: block');
    locat.classList.add('red-border');
} else if (locat.value.length < 4){
    locationError.setAttribute('style', 'display: block');
    locat.classList.add('red-border');
} else if (!validatelocat()){
    locationError.setAttribute('style', 'display: block');
} else {
    console.log('Valid location');
    locat.classList.remove('red-border');
    locat.classList.add('green-border');
}
}
locat.onfocus = function() {
    locat.classList.remove('green-border');
    locat.classList.remove('red-border');
    locationError.setAttribute('style', 'display: none');
}
//POSTAL CODE VALIDATION
var postalCode = document.getElementById('formpostal-code');
postalCode.onblur = function() {
    if (postalCode.value == ''){
    postalCodeError.setAttribute('style', 'display: block');
    postalCode.classList.add('red-border');
} else if (postalCode.value.length < 4 || postalCode.value.length > 5){
    postalCodeError.setAttribute('style', 'display: block');
    postalCode.classList.add('red-border');
} else if (isNaN(postalCode.value)){
    postalCodeError.setAttribute('style', 'display: block');
} else {
    console.log('Valid Postal Code');
    postalCode.classList.remove('red-border');
    postalCode.classList.add('green-border');
}
}
postalCode.onfocus = function() {
    postalCode.classList.remove('green-border');
    postalCode.classList.remove('red-border');
    postalCodeError.setAttribute('style', 'display: none');
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
    emailError.setAttribute('style', 'display: block');
    email.classList.add('red-border');
} else if (!validateEmail()){
    emailError.setAttribute('style', 'display: block');
} else {
    console.log('Valid Email');
    email.classList.remove('red-border');
    email.classList.add('green-border');
}
}
email.onfocus = function() {
    email.classList.remove('green-border');
    email.classList.remove('red-border');
    emailError.setAttribute('style', 'display: none');
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
    passwordError.setAttribute('style', 'display: block');
    password.classList.add('red-border');
} else if (password.value.length < 8){
    passwordError.setAttribute('style', 'display: block');
    password.classList.add('red-border');
} else if (!validatePass()){
    passwordError.setAttribute('style', 'display: block');
} else {
    console.log('Valid Password');
    password.classList.remove('red-border');
    password.classList.add('green-border');
}
}
password.onfocus = function() {
    password.classList.remove('green-border');
    password.classList.remove('red-border');
    passwordError.setAttribute('style', 'display: none');
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
    passwordRepeatError.setAttribute('style', 'display: block');
    passwordRepeat.classList.add('red-border');
} else if (passwordRepeat.value.length < 8){
    passwordRepeatError.setAttribute('style', 'display: block');
    passwordRepeat.classList.add('red-border');
} else if (!validateRepeatPass()){
    passwordRepeatError.setAttribute('style', 'display: block');
} else if (passwordRepeat != password){
    passwordRepeatError.setAttribute('style', 'display: block');
} else {
    console.log('Valid Password');
    passwordRepeat.classList.remove('red-border');
    passwordRepeat.classList.add('green-border');
}
}
passwordRepeat.onfocus = function() {
    passwordRepeat.classList.remove('green-border');
    passwordRepeat.classList.remove('red-border');
    passwordRepeatError.setAttribute('style', 'display: none');
}
createButton.addEventListener('click', function() {
    if (firstName.value == '' || (!validateTxt())){
    errorMessageName = ' Invalid First Name '; 
} else if (lastName.value === '' || (!validateTxt())){
    errorMessageLastName = ' Invalid Last Name ';
} else if (idDoc.value === '' || (isNaN)){
    errorMessageId = ' Invalid ID ';
} else if (birthDate.value === '' || (!validateDate())){
    errorMessageBirthDate = ' Invalid Birth Date ';
} else if (phoneNum.value === '' || (isNaN)){
    errorMessagePhoneNum = ' Invalid Phone Number ';
} else if (address.value === '' || (!validateAddress())){
    errorMessageAddress = ' Invalid Address ';
} else if (locat.value === '' || (!validatelocat())){
    errorMessageLocation = ' Invalid Location ';
} else if (locat.value === '' || (!validatelocat())){
    errorMessagePostalCode = ' Invalid Postal Code ';   
} else if (email.value == '' || !validateEmail()) {
   errorMessageEmail = ' Invalid Email ';
} else if (password.value == '' || (!validatePass()) ){
   errorMessagePassword =' Invalid Password ';
} else if (password.value == '' || (!validatePass()) ){
    errorMessagePasswordrepeat =' Invalid Password Repeat ';
} else {
    errorMessageName = '';
    errorMessageLastName = '';
    errorMessageId = '';
    errorMessageBirthDate = '';
    errorMessagePhoneNum = '';
    errorMessageAddress = '';
    errorMessageLocation = '';
    errorMessagePostalCode = '';
    errorMessageEmail = '';
    errorMessagePassword = '';
    errorMessagePasswordrepeat = '';
    successMessage = 'Fisrt Name: ' + firstName.value + '\nLast Name: ' + lastName.value 
    + '\nID: ' + idDoc.value + '\nBirth Date: ' + birthDate.value + '\nPhone Number: ' + phoneNum.value +
    '\nAddress: ' + address.value + '\nLocation: ' + locat.value + 'Postal Code: ' + postalCode.value +
    '\nEmail: ' + email.value + '\nPassword: ' + password.value;
}})
createButton.onclick = function() {
    alert(successMessage + errorMessageName + errorMessageLastName + errorMessageId + errorMessageBirthDate + 
        errorMessagePhoneNum + errorMessageAddress + errorMessageLocation + errorMessagePostalCode + errorMessageEmail + 
        errorMessagePassword);
}
createButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(email.value);
}
)