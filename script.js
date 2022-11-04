// Assignment code here
const number = ["0","1","2","3","4","5","6","7","8","9"];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const specialCharacter = ["	U+0021","U+0022","U+0023","U+0024","U+0025","U+0026","U+0027","U+0028","U+0029","U+002A","U+002F","U+005C","U+003C","U+003E",];

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
    var forLowercase = prompt("Do you require lowercase?");
    var forUppercase = prompt("Do you require uppercase?");
    var forNumbers = prompt("Do you require numbers?");
    var forCharacters = prompt("Do you require special characters?");
    var confirmArray = new Array(forLowercase, forUppercase, forNumbers, forCharacters);
    var allPromptsFalseCheck = confirmArray.every( confirmElement  => !confirmElement );
    if (allPromptsFalseCheck) {
       alert("Invalid response. What types of characters does your password require?")
       passwordCharacters();   
    };
    var passwordCharacters = '';

  if (forLowercase == "Y", "yes") { 
     passwordCharacters += lowerCase; 
  }
  if (forUppercase == "Y", "yes") { 
     passwordCharacters += upperCase; 
  }
  if (forNumbers == "Y", "yes") { 
     passwordCharacters += number; 
  }
  if (forCharacters == "Y", "yes") { 
     passwordCharacters += specialCharacter; 
  }

  return passwordCharacters;
};

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