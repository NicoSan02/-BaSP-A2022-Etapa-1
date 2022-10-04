window.onload = function () {
    var firstName = document.getElementById('formname');
    var nameError = document.getElementById('name-error');
    var lastNameError = document.getElementById('lastname-error');
    var idError = document.getElementById('id-error');
    var errorMessage = [];  

    //FIRST NAME VALIDATION
    var txtPattern = (/^[a-zA-Z]{4,30}$/);
    firstName.onblur = function validateFirstName () {
    var validateName = txtPattern.test(firstName.value);
    if (validateName !== true){
        nameError.setAttribute('style', 'display: block');
        firstName.classList.add('red-border');
        errorMessage.push('Invalid First Name ');
    } else {
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
    lastName.onblur = function() {
    var validateLastName = txtPattern.test(lastName.value);
    if (validateLastName !== true) {
        errorMessage.push('Invalid Last Name ');
        lastNameError.setAttribute('style', 'display: block');
        lastName.classList.add('red-border');
    } else {
        lastName.classList.remove('red-border');
        lastName.classList.add('green-border');
    }}
    lastName.onfocus = function() {
        lastName.classList.remove('green-border');
        lastName.classList.remove('red-border');
        lastNameError.setAttribute('style', 'display: none');
    }
    // ID VALIDATION 
    var idDoc = document.getElementById('formiddocument');
    // idDoc.onblur = function() {
    //     if (idDoc.value == ''){
    //     idError.setAttribute('style', 'display: block');
    //     idDoc.classList.add('red-border');
    //     errorMessage.push('Invalid ID ');
    // } else if (idDoc.value.length < 7){
    //     idError.setAttribute('style', 'display: block');
    //     idDoc.classList.add('red-border');
    //     errorMessage.push('Invalid ID ');
    // } else if (isNaN(idDocValue)){
    //     errorMessage.push('Invalid ID ');
    //     idError.setAttribute('style', 'display: block');
    // } else {
    //     idDoc.classList.remove('red-border');
    //     idDoc.classList.add('green-border');
    // }
    // }
    idDoc.onblur = function validateID () {
        var idDoc = document.getElementById('formiddocument');
        var idDoc = document.getElementById('formiddocument');
        if (idDoc.value == '' || idDoc.value.length < 7 || isNaN(idDoc.value)) {
            idError.setAttribute('style', 'display: block');
            idDoc.classList.add('red-border');
            errorMessage.push('Invalid ID ');
        } else {
            console.log('Valid ID');
            idDoc.classList.remove('red-border');
            idDoc.classList.add('green-border');
        }
        }
        var idDoc = document.getElementById('formiddocument');
        var idError = document.getElementById('id-error');
        idDoc.onfocus = function() {
            idDoc.classList.remove('green-border');
            idDoc.classList.remove('red-border');
            idError.setAttribute('style', 'display: none');
    }
    //BIRTH DATE VALIDATION
    var birthDate = document.getElementById('formbirthdate');
    var birthDateError = document.getElementById('birth-date-error');
    birthDate.onblur = function validateBirthDate () {
        if (birthDate.value === ''){
        birthDateError.setAttribute('style', 'display: block');
        birthDate.classList.add('red-border');
        errorMessage.push('Invalid Birth Date ');
    } else {
        console.log('Valid Birth Date');
        birthDate.classList.remove('red-border');
        birthDate.classList.add('green-border');
    }
    }
    var birthDateError = document.getElementById('birth-date-error');
    birthDate.onfocus = function() {
        birthDate.classList.remove('green-border');
        birthDate.classList.remove('red-border');
        birthDateError.setAttribute('style', 'display: none');
    }
    //PHONE NUMBER VALIDATION
    var phoneNum = document.getElementById('formphone');
    var phoneError = document.getElementById('phone-error');
    phoneNum.onblur = function validatePhone () {
        if (phoneNum.value == ''){
        phoneError.setAttribute('style', 'display: block');
        phoneNum.classList.add('red-border');
        errorMessage.push('Invalid Phone Number ');
    } else if (isNaN(phoneNum.value)){
        phoneError.setAttribute('style', 'display: block');
        errorMessage.push('Invalid Phone Number ');
    }  else if (phoneNum.value.length < 10){
        errorMessage.push('Invalid Phone Number ');
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
    var phoneError = document.getElementById('phone-error');
    phoneNum.onfocus = function() {
        phoneNum.classList.remove('green-border');
        phoneNum.classList.remove('red-border');
        phoneError.setAttribute('style', 'display: none');
    }
    //ADDRESS VALIDATION
    var address = document.getElementById('formaddress');
    function validateAddress (){
        addressPattern = (/^['a-zA-Z'0-9 ]{5,20}$/);
        if (address.value.match(addressPattern)) {
            return true;
        } else {
            return false;
        }
    }
    var addressError = document.getElementById('address-error');
    address.onblur = function() {
        if (address.value === ''){
        errorMessage.push('Invalid Address ');
        addressError.setAttribute('style', 'display: block');
        address.classList.add('red-border');
    } else if (!validateAddress(address.value)){
        errorMessage.push('Invalid Address ');
        addressError.setAttribute('style', 'display: block');
    } else {
        address.classList.remove('red-border');
        address.classList.add('green-border');
    }
    }
    var addressError = document.getElementById('address-error');
    address.onfocus = function() {
        address.classList.remove('green-border');
        address.classList.remove('red-border');
        addressError.setAttribute('style', 'display: none');
    }
    //LOCATION VALIDATION
    var locat = document.getElementById('formlocation');
    function validatelocat (){
        locatPattern = (/^[A-Z]{4,30}$/i);
        if (locat.value.match(locatPattern)) {
            return true;
        } else {
            return false;
        }
    }
    var locationError = document.getElementById('location-error');
    locat.onblur = function() {
        if (locat.value == ''){
        locationError.setAttribute('style', 'display: block');
        locat.classList.add('red-border');
        errorMessage.push('Invalid Location ');
    } else if (!validatelocat()){
        locationError.setAttribute('style', 'display: block');
        errorMessage.push('Invalid Location ');
    } else {
        locat.classList.remove('red-border');
        locat.classList.add('green-border');
    }
    }
    locat.onfocus = function() {
        var locationError = document.getElementById('location-error');
        locat.classList.remove('green-border');
        locat.classList.remove('red-border');
        locationError.setAttribute('style', 'display: none');
    }
    //POSTAL CODE VALIDATION
    var postalCode = document.getElementById('formpostal-code');
    var postalCodeError = document.getElementById('postal-code-error');
    postalCode.onblur = function validatePostCode () {
        if (postalCode.value == ''){
        postalCodeError.setAttribute('style', 'display: block');
        postalCode.classList.add('red-border');
        errorMessage.push('Invalid Postal Code ');
    } else if (postalCode.value.length < 4 || postalCode.value.length > 5){
        postalCodeError.setAttribute('style', 'display: block');
        postalCode.classList.add('red-border');
        errorMessage.push('Invalid Postal Code ');
    } else if (isNaN(postalCode.value)){
        postalCodeError.setAttribute('style', 'display: block');
        errorMessage.push('Invalid Postal Code ');
    } else {
        console.log('Valid Postal Code');
        postalCode.classList.remove('red-border');
        postalCode.classList.add('green-border');
    }
    }
    var postalCodeError = document.getElementById('postal-code-error');
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
    var emailError = document.getElementById('email-error');
    email.onblur = function() {
        if (email.value == ''){
        emailError.setAttribute('style', 'display: block');
        email.classList.add('red-border');
        errorMessage.push('Invalid Email ');
    } else if (!validateEmail()){
        emailError.setAttribute('style', 'display: block');
        errorMessage.push('Invalid Email ');
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
    var passwordError = document.getElementById('password-error');
    password.onblur = function validatePassword() {
    var passPattern = /^[0-9a-zA-Z]/;
    var validatePass = passPattern.test(password.value);
    if (password.value == ''){
        passwordError.setAttribute('style', 'display: block');
        password.classList.add('red-border');
        errorMessage.push('Invalid Password ');
    } else if (password.value.length < 8){
        passwordError.setAttribute('style', 'display: block');
        password.classList.add('red-border');
        errorMessage.push('Invalid Password ');
    } else if (validatePass !== true){
        passwordError.setAttribute('style', 'display: block');
        password.classList.add('red-border');
        errorMessage.push('Invalid Password ');
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
    var passwordRepeatError = document.getElementById('repeat-password-error');
    passwordRepeat.onblur = function validatePassword2() {
    var passPattern = /^[0-9a-zA-Z]/;
    var validatePassRepeat = passPattern.test(passwordRepeat.value);
        if (passwordRepeat.value == ''){
        errorMessage.push('Invalid Password repeat ');
        passwordRepeatError.setAttribute('style', 'display: block');
        passwordRepeat.classList.add('red-border');
    } else if (passwordRepeat.value.length < 8){
        passwordRepeatError.setAttribute('style', 'display: block');
        passwordRepeat.classList.add('red-border');
        errorMessage.push('Invalid Password repeat ');
    } else if (validatePassRepeat !== true){
        passwordRepeatError.setAttribute('style', 'display: block');
        errorMessage.push('Invalid Password repeat ');
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
    var txtPattern = (/^[a-zA-Z]{4,30}$/);
    var firstName = document.getElementById('formname');
    var lastName = document.getElementById('formlastname');
    var createButton = document.getElementById('create-button');
    var firstName = document.getElementById('formname');
    createButton.addEventListener('click', function() {
        var birthDate2 = birthDate.value.split('-')
        var birthDateValid = birthDate2[1] + '/' + birthDate2[2] + '/' + birthDate2[0];
        if (errorMessage.length < 1) {
             var urlWithQP = `https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${firstName.value}&lastName=${lastName.value}&dni=${idDoc.value}&dob=${birthDateValid}&phone=${phoneNum.value}&address=${address.value}&city=${locat.value}&zip=${postalCode.value}&email=${email.value}&password=${password.value}&password=${passwordRepeat.value}`;
            fetch(urlWithQP)
                .then(function (response){
                return response.json()
                })
                .then(function (data) {
                if(data.success == true) {
                    console.log(data)
                    localStorage.setItem('formname', firstName.value);
                    localStorage.setItem('formlastname', lastName.value);
                    localStorage.setItem('formiddocument', idDoc.value);
                    localStorage.setItem('formbirthdate', birthDate.value);
                    localStorage.setItem('formphone', phoneNum.value);
                    localStorage.setItem('formaddress', address.value);
                    localStorage.setItem('formlocation', locat.value);
                    localStorage.setItem('formpostal-code', postalCode.value);
                    localStorage.setItem('formemail', email.value);
                    localStorage.setItem('formpassword', password.value);
                    localStorage.setItem('formrepeatpassword', passwordRepeat.value);
                }})
                .catch(function (error) {
                console.log(error);
            })} else {
            alert('Request error' + errorMessage + '\nFisrt Name: ' + firstName.value + '\nLast Name: ' + lastName.value 
                    + '\nID: ' + idDoc.value + '\nBirth Date: ' + birthDate.value + '\nPhone Number: ' + phoneNum.value +
                    '\nAddress: ' + address.value + '\nLocation: ' + locat.value + '\nPostal Code: ' + postalCode.value +
                    '\nEmail: ' + email.value + '\nPassword: ' + password.value);
                }})
        var successMessage = '';
        createButton.onclick = function() {
            alert(errorMessage + successMessage);
        }
    var createButton = document.getElementById('create-button');
    var firstName = document.getElementById('formname');
    createButton.addEventListener('click', function(){
        var errorMessage = [];
        alert(errorMessage + '\nFisrt Name: ' + firstName.value + '\nLast Name: ' + lastName.value 
        + '\nID: ' + idDoc.value + '\nBirth Date: ' + birthDate.value + '\nPhone Number: ' + phoneNum.value +
        '\nAddress: ' + address.value + '\nLocation: ' + locat.value + '\nPostal Code: ' + postalCode.value +
        '\nEmail: ' + email.value + '\nPassword: ' + password.value);})
    createButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(email.value);
    }
    )
}