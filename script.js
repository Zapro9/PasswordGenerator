var specialCharacters = "!@#$%^&*(){}[]=<>/?,.";
var generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Enter the number of characters you would like for your password. (Minimum of 8)");

  var numbers = confirm("Would you like to include numbers in your password? \nExamples: 4,17,32,etc");
    
  var lowerCases = confirm("Would you like to include lower case characters in your password?");

  var upperCases = confirm("Would you like to include upper case characters in your password?");

  var special = confirm("Would you like to include special characters in your password? \nExamples: !,$,%,&,etc.");

  var minimumCount = 0;

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

      //Charset - http://www.net-comber.com/charset.html
    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    function getLowerCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    function getUpperCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    function getSymbols() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}
