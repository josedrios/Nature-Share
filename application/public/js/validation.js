//Validility Statuses
var usernameLengthValid;
var usernameAlphaValid;
var usernameStartValid;
var emailValid;
var passwordLengthValid;
var passwordCaseValid;
var passwordNumberValid;
var passwordSpecialValid;
var confirmValid;
var checkboxValid;
var tosValid;
var usernameZero;
var emailZero;
var passwordZero;
var confirmZero;

//Submit Button Validation Portion
function subcheck(){
    if(usernameSub === true && emailSub === true && passwordSub === true && confirmSub === true && checkboxSub === true && tosSub === true){
    document.getElementById('sub').removeAttribute('disabled');
    }
    if(usernameSub === false || emailSub === false || passwordSub === false || confirmSub === false || checkboxSub === false || tosSub === false){
        document.getElementById('sub').setAttribute("disabled","disabled")
    }
}
//Username Validation Portion
var usernameSub;
document.getElementById("username").addEventListener("input", function(ev){
    let userInput = ev.currentTarget;
    let username = userInput.value;
    if(username.length === 0 || username === null){
        usernameZero = false;
    }
    else{
        usernameZero = true;
    }
    if(username.length < 3 && username.length > 0){
        document.getElementById("lengthError").style.display = "inline";
        let errorLength = "Username should be more than 3 characters"
        document.getElementById("lengthError").innerHTML = errorLength;
        usernameLengthValid = false;
    }
    else{
        document.getElementById("lengthError").style.display = "none";
        usernameLengthValid = true;
    }
    if(alphanumeric(username) === false && username.length != 0){
        document.getElementById("alphanumericError").style.display = "flex";
        let alphanumericError = "Only use alphanumeric values"
        document.getElementById("alphanumericError").innerHTML = alphanumericError;
        usernameAlphaValid = false;
    }
    else{
        document.getElementById("alphanumericError").style.display = "none";
        usernameAlphaValid = true;
    }
    if(firstCharacter(username) === false && username.length != 0){
        document.getElementById("startError").style.display = "flex";
        let startError = "Username must start with a character"
        document.getElementById("startError").innerHTML = startError;
        usernameStartValid = false;
    }
    else{
        document.getElementById("startError").style.display = "none";
        usernameStartValid = true;
    }
    if(usernameLengthValid === true && usernameAlphaValid === true && usernameStartValid === true && usernameZero === true){
        //document.getElementById("sub").disabled = false;
        usernameSub = true;
    }
    if(usernameLengthValid === false || usernameAlphaValid === false || usernameStartValid === false || usernameZero === false){
        usernameSub = false;
    }
    subcheck();
    
});

//Email Validation Portion
var emailSub;
document.getElementById("email").addEventListener("input", function(ev){
    let emailInput = ev.currentTarget;
    let email = emailInput.value;
    if(email.length === 0 || email === null){
        emailZero = false;
    }
    else{
        emailZero = true;
    }
    if(emailValidation(email) === false && email.length > 0){
        document.getElementById("emailError").style.display = "inline";
        let emailError = "Email is invalid"
        document.getElementById("emailError").innerHTML = emailError;
        emailValid = false;
    }
    else{
        document.getElementById("emailError").style.display = "none";
        emailValid = true;
    }
    if(emailValid === true && emailZero === true){
        emailSub=true;
    }
    if(emailValid === false || emailZero === false){
        emailSub=false;
    }
    subcheck();
});

//Password Validation Portion
var passwordSub;
var password; //keep this variable in the global scope
document.getElementById("password").addEventListener("input", function(ev){
    let passwordInput = ev.currentTarget;
    password = passwordInput.value;
    doublecheck();
    if(password.length === 0 || password === null){
        passwordZero = false;
    }
    else{
        passwordZero = true;
    }
    if(password.length < 8 && password.length > 0){
        document.getElementById("passwordLengthError").style.display = "inline";
        let passwordLengthError = "Password should be at least 8 characters long"
        document.getElementById("passwordLengthError").innerHTML = passwordLengthError;
        passwordLengthValid = false;
    }
    else{
        document.getElementById("passwordLengthError").style.display = "none";
        passwordLengthValid = true;
    }
    if(uppercase(password) === false && password.length != 0){
        document.getElementById("passwordCaseError").style.display = "flex";
        let passwordCaseError = "Password should contain an upper case"
        document.getElementById("passwordCaseError").innerHTML = passwordCaseError;
        passwordCaseValid = false;
    }
    else{
        document.getElementById("passwordCaseError").style.display = "none";
        passwordCaseValid = true;
    }
    if(containsNumber(password) === false && password.length != 0){
        document.getElementById("numberError").style.display = "flex";
        let numberError = "Password should contain a number"
        document.getElementById("numberError").innerHTML = numberError;
        passwordNumberValid = false;
    }
    else{
        document.getElementById("numberError").style.display = "none";
        passwordNumberValid = true;
    }
    if(containsSpecial(password) === false && password.length != 0){
        document.getElementById("specialError").style.display = "flex";
        let specialError = "Password should contain a special character"
        document.getElementById("specialError").innerHTML = specialError;
        passwordSpecialValid = false;
    }
    else{
        document.getElementById("specialError").style.display = "none";
        passwordSpecialValid = true;
    }
    if(passwordCaseValid=== true && passwordLengthValid === true && passwordNumberValid === true && passwordSpecialValid === true && passwordZero === true){
        passwordSub = true;
    }
    if( passwordCaseValid=== false || passwordLengthValid === false || passwordNumberValid === false || passwordSpecialValid === false || passwordZero === false){
        passwordSub = false;
    }
    subcheck();
});

//Confirm Password Validation Portion
var confirmSub;
var confirm;
document.getElementById("confirmPassword").addEventListener("input", function(ev){
    let confirmInput = ev.currentTarget;
    confirm = confirmInput.value;
    if(confirm.length === 0 || confirm === null){
        confirmZero = false;
    }
    else{
        confirmZero = true;
    }
    if(confirm != password && confirm.length != password.length && confirm.length > 0){
        document.getElementById("matchError").style.display = "inline";
        let matchError = "Does not match"
        document.getElementById("matchError").innerHTML = matchError;
        confirmValid = false;
    }
    else{
        document.getElementById("matchError").style.display = "none";
        confirmValid = true;
    }
    if(confirmValid === true && confirmZero === true){
        confirmSub=true;
    }
    if(confirmValid === false || confirmZero === false){
        confirmSub=false;
    }
    subcheck();
});

//Age Check Validation Portion
var checkboxSub
var checkStatus = document.getElementById("ageCheck");
checkStatus.addEventListener('change', function(){
    if(this.checked){
        document.getElementById("ageError").style.display="none";
        checkboxValid = true;
    }
    else{
        document.getElementById("ageError").style.display = "inline";
        let ageError = "Must be checked"
        document.getElementById("ageError").innerHTML = ageError;
        checkboxValid = false;
    }
    if(checkboxValid === true){
        checkboxSub=true;
    }
    if(checkboxValid === false){
        checkboxSub=false;
    }
    subcheck();
})

//TOS and Privacy Link Validation Portion
var tosSub
document.getElementById("tos").onclick = function(ev){
        
    tosValid = true;
    if(tosValid === true){
        tosSub=true;
    }
    if(tosValid === false){
        tosSub=false;
    }
    subcheck();
}

//Functions for the Validations Portion
function alphanumeric(username) {
  return /^[A-Za-z0-9]*$/.test(username);
}

function emailValidation(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function uppercase(password){
    return /[A-Z]/.test(password);
}

function firstCharacter(username){
    let start = username.charAt(0);
    return /[a-zA-Z]/.test(start);
}

function containsNumber(password){
    return /\d/.test(password);
}

function containsSpecial(password){
    var special = ['/','*','-','+','!','@','#','$','^','&','~','[',']'];
    specialLength = special.length;
    while(specialLength--){ 
        if(password.indexOf(special[specialLength]) != -1){
            return true;
        }
    }
    return false;
}

function doublecheck(){
    if(confirm != password && password.length != 0 && confirm.length > 0){
        document.getElementById("matchError").style.display = "inline";
        let matchError = "Does not match"
        document.getElementById("matchError").innerHTML = matchError;
        confirmValid = false;
    }
}


