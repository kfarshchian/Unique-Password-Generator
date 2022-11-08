// Assignment code here

//assign the password length and force the length.
function createPasswordLength() {
    var passwordLength = prompt("How many characters is your password? (Minimum 8 Maximum 128)");
    while (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
      alert("Error: Password length does not meet specifications.")
      passwordLength = prompt("How many characters is your password? (Minimum 8 Maximum 128)");
    }
    return passwordLength;
  };
  
  function passwordCharacters() {
    alert("Thank you for using Kameron's Unique password generator. What types of characters does your password require?");
    // this will add or remove lowercase
    var forLowercase = confirm("Do you require lowercase? (Click ok to add or cancel to move on.)");
    // this will add or remove uppercase
    var forUppercase = confirm("Do you require uppercase? (Click ok to add or cancel to move on.)");
    // this will add or remove numbers
    var forNumbers = confirm("Do you require numbers? (Click ok to add or cancel to move on.)");
    // this will add or remove special characters
    var forCharacters = confirm("Do you require special characters? (Click ok to add or cancel to move on.)");
  
    // array
    var confirmArray = new Array(forLowercase, forUppercase, forNumbers, forCharacters);
    // array check
    var allPromptsFalseCheck = confirmArray.every( confirmElement  => !confirmElement );
    
    // if no
    if (allPromptsFalseCheck) {
       alert("Error: At least one option is required.")
       passwordCharacters();   
    };
  
    // character types
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const characters = `!"#$%&'()*+,-./:;<>=?@[]^_\\{}|~`;
  
    var passwordCharacters = '';
    //Check to see if options are picked and then add.
    
    if (forNumbers) { 
       passwordCharacters += numbers; 
    }
    if (forCharacters) { 
       passwordCharacters += characters; 
    }
    if (forLowercase) { 
      passwordCharacters += lowercase; 
   }
   if (forUppercase) { 
      passwordCharacters += uppercase; 
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
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);