// Assignment code here


function createPasswordLength() {
    var passwordLength = prompt("How many characters is your password? (Minimum 8 Maximum 128)");
    while (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
      alert("Error: Password length does not meet specifications.")
      passwordLength = prompt("How many characters is your password? (Minimum 8 Maximum 128)");
    }
    return passwordLength;
  };
  
  function passwordCharacters() {
    alert("What types of characters does your password require?");
    // for lowercase
    var forLowercase = confirm("Do you need lowercase?");
    // for uppercase
    var forUppercase = confirm("Do you need uppercase?");
    // for numbers
    var forNumbers = confirm("Do you need numbers?");
    // for special characters
    var forCharacters = confirm("Do you need special characters?");
  
    // array
    var confirmArray = new Array(forLowercase, forUppercase, forNumbers, forCharacters);
    // array check
    var allPromptsFalseCheck = confirmArray.every( confirmElement  => !confirmElement );
    
    // if no
    if (allPromptsFalseCheck) {
       alert("Invalid response. What types of characters does your password require?")
       passwordCharacters();   
    };
  
    // valid character types
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const characters = `!"#$%&'()*+,-./:;<>=?@[]^_\\{}|~`;
  
    var passwordCharacters = '';
  
    if (forLowercase) { 
       passwordCharacters += lowercase; 
    }
    if (forUppercase) { 
       passwordCharacters += uppercase; 
    }
    if (forNumbers) { 
       passwordCharacters += numbers; 
    }
    if (forCharacters) { 
       passwordCharacters += characters; 
    }
  

    return passwordCharacters;
  };
// creates the password with all options.
function generatePassword() {
  var userLength = createPasswordLength();
  var userCharacters = passwordCharacters();

  var userPassword = "";
  for (let i = 0; i < userLength; i++) {
    userPassword += userCharacters.charAt(Math.floor(Math.random() * userCharacters.length));
  }
  return userPassword;
};

var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);