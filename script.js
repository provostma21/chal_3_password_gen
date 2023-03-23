// Assignment Code
var generateBtn = document.querySelector("#generate");

// Sets up my array variables which include the possible characters available(Uppercase, Lowercase, Numerical, and Special) as well as the empty generated password array.
var passArray = [];
var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numArray = ['1','2','3','4','5','6','7','8','9','0'];
var specArray = ['`','!','@','#','$','%','^','&','*','(',')','-','=','_','+','<','>','/','?','[',']'];
// Defines the password length to start.
var passLen = 0;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// A Function to create the randomly generated password
function generatePassword() {
  var password = '';
  // Resets the array for multiple uses so the arrays don't stack.
  passArray = [];
  // Prompts the user for the total characters for the password.
  passLen = window.prompt("How many characters would you like your password to contain?(Note: Must be between 8 and 128)");
// If the password length is not within the range of 8 and 128, the user will be notified and prompted for a new input.
  if(isNaN(passLen) || passLen < 8 || passLen > 128) {
    window.alert("Password length must bet between 8 and 128 characters. Please try again.");
    return generatePassword();
  }
  // Confirm prompts for the Uppercase, Lowercase, Numerical, and Special characters.
  passUpper = window.confirm("Do you want to include uppercase characters? Click OK to confirm.");

  passLower = window.confirm("Do you want to include lowercase characters? Click OK to confirm.");

  passNum = window.confirm("Do you want to include numeric characters? Click OK to confirm.");

  passSpec = window.confirm("Do you want to include special characters? Click OK to confirm.");

  // For every prompt that is confirmed, the related character array is added to the usable characters for the password.
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
  // Randomly selects characters from the concatonated password array until the password length the user input is reached.
  for (var i = 0; i < passLen; i++) {
    var randomIndex = Math.floor(Math.random() * passArray.length)
    password = password + passArray[randomIndex];
  }
  return password;
}














// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
