// Assignment Code
var generateBtn = document.querySelector("#generate");

var passArray = [];
var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numArray = ['1','2','3','4','5','6','7','8','9','0'];
var specArray = ['`','!','@','#','$','%','^','&','*','(',')','-','=','_','+','<','>','/','?','[',']'];


var passLen = 0;
var passUpper = true;
var passLower = true;
var passNum = true;
var passSpec = true;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = '';
  passArray = [];

  passLen = window.prompt("How many characters would you like your password to contain?(Note: Must be between 8 and 128)");

  if(isNaN(passLen) || passLen < 8 || passLen > 128) {
    window.alert("Password length must bet between 8 and 128 characters. Please try again.");
    return generatePassword();
  }

  passUpper = window.confirm("Do you want to include uppercase characters? Click OK to confirm.");

  passLower = window.confirm("Do you want to include lowercase characters? Click OK to confirm.");

  passNum = window.confirm("Do you want to include numeric characters? Click OK to confirm.");

  passSpec = window.confirm("Do you want to include special characters? Click OK to confirm.");

  if (passUpper) {
    passArray = passArray.concat(upperArray);
  }

  if (passLower) {
    passArray = passArray.concat(lowerArray);
  }

  if (passNum) {
    passArray = passArray.concat(numArray);
  }

  if (passSpec) {
    passArray = passArray.concat(specArray);
  }

}














// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
