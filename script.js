 // Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays 
var typesOfCharacters = {
  alphaLower: "abcdefghijklmnopqrstuvwxyz",
  alphaUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specialChar: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",

}

//variables 
var confirmLower;  
var confirmUpper;  
var confirmSpecial; 
var confirmNum;

// Write password to the #password input
function generatePassword() {
  var value = prompt("How many characters would you like your password to be? Choose a length of at least 8 characters and no more than 128 characters.");
  var length = parseInt(value);
 
  // If user does not enter a correct value
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters");
    return "Please try again";
    
  }
  
  if (!length) {
    alert("Password must be between 8 and 128 characters");
    return "Please try again";
  }

  // At least one criteria should be chosen from below
  confirmLower = confirm("Will this contain Lowercase letters?");
  confirmUpper = confirm("Will this contain Uppercase letters?");
  confirmSpecial = confirm("Will this contain special characters?");
  confirmNum = confirm("Will this contain numbers?");
  
  var possibleCharacters = [];

  // If no criteria is chosen by user 
  if (!confirmNum && !confirmSpecial && !confirmUpper && !confirmLower) {
    alert("You must choose at least one of the following criteria: number, special characters, uppercase letters, lowercase letters! Please start over.");
  return "Please try again";
  }

  //Start of user input criteria
  if (confirmLower){
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.alphaLower.split(""));
  }

  if (confirmUpper){
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.alphaUpper.split(""));
  }

  if (confirmSpecial){
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.specialChar.split(""));
  }

  if (confirmNum){
    for (var i = 0; i < 10; i++) {
      possibleCharacters.push(i);
    }
  }

  var password = "";

  for (var i = 0; i < length; i++) {
   var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password = password + possibleCharacters[randomIndex]; 

  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
