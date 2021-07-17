var lowercase = ["a","b","c","d","e", "f","g","h","i","j","k","l","o","m","n","p","q","r", "s","t","u","v","w", "x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","O","M","N","P","R", "S","T","U","V","W","X","Y","Z"];
var numeric = ["1","2","3","4","5","6","7","8","9"];
var specialChar = ['@','%',  '+',
    "\\",
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];

function passwordchoices() 
{
  var UserAnswers = {length:length, gotLower:gotLower, gotSpecial:gotSpecial, gotNumber:gotNumber};
  var length = parseInt (prompt("Password must be between 10 to 64 characters long, how long would you like yours?"));

  if (isNaN(length)===true)
  {
      alert("Password must be more than 10 and less than 64 characters");
      return;
  }


  if (length < 10){
      alert("This app has chosen a minimum password length with 10 characters; please type 10 or more");
      return;
  }
  if (length > 64){
      alert("This app has chosen a maximum password length with 64 characters; please type 64 or less")
      return;
  }

  var gotLower = false;
  var gotUpper = false;
  var gotSpecial = false;
  var gotNumber = false;

  var gotLower = confirm("Press OK to use lowercase letters in your password")
  var gotUpper = confirm("Press OK to use uppercase letters in your password")
  var gotSpecial = confirm("Press OK to use symbols in your password")
  var gotNumber = confirm("Press OK to use numbers in your password")




  if (
      gotLower === false&&
      gotUpper === false&&
      gotSpecial === false&&
      gotNumber ===false

  )

  {
      alert ("Please click OK to at least one type of character (uppercase/lowercase/symbols/numbers) to continue")
  return;

  }
  var UserAnswers = {length:length, gotLower:gotLower, gotSpecial:gotSpecial, gotNumber:gotNumber};
  return UserAnswers
}





function random (arr){
var randomIndex = Math.floor(Math.random() * arr.length);
var randomElemnt = arr[randomIndex]
return randomElemnt   
}



function generatePassword() 
{
  var pwChoices = passwordchoices();

  var result =  [];
  var myCharacter1 =  [];
  var myCharacter2 =  [];

  if (pwChoices.gotLower) {
      myCharacter1 = myCharacter1.concat(lowercase);
      myCharacter2.push(random(lowercase));
  }
  if (pwChoices.gotUpper){
  myCharacter1 = myCharacter1.concat(uppercase);
  myCharacter2.push(random(uppercase))
  }
  if (pwChoices.gotSpecial){
    myCharacter1 = myCharacter1.concat(specialChar);
    myCharacter2.push(random(specialChar))
  }
  if (pwChoices.gotNumber){
  myCharacter1 = myCharacter1.concat(numeric);
  myCharacter2.push(random(numeric))
  }

  if (pwChoices.gotLower){
      myCharacter1 = myCharacter1.concat(lowercase);
      myCharacter2.push(random(lowercase))
  }

  for (var i = 0; i - pwChoices.length; i++) {
    var myCharacter1 = random(myCharacter1);
    result.push(myCharacter1)
    }
    for (var i = 0; i - myCharacter2.length; i++) {
      result[i]=myCharacter2
      }
  
  pwChoices={length:0, gotLower:false, gotUpper:false, gotSpecial:false, gotNumber:false};
  return result.join("")


}


var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let masterArray = "";
let randomPassword = "";
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
let passwordLength = prompt("Select a password between 10 to 64 characters");
if (!passwordLength || passwordLength < 10 || passwordLength > 64) {
return alert("Please select a password with more than 10 or greater than 64 characters");
}

let useLowerCase = confirm("Press OK to use lowercase letters");
if (useLowerCase === true) {
  masterArray = [...masterArray, ...lowerCase];
}
let useUpperCase = confirm("Press OK to use uppercase letters");
if (useUpperCase === true) {
  masterArray = [...masterArray, ...upperCase];
}
let useNumbers = confirm("Press OK to use numbers");
if (useNumbers === true) {
  masterArray = [...masterArray, ...numbers];
}
let useSpecialCharacters = confirm("Press OK to use symbols");
if (useSpecialCharacters === true) {
  masterArray = [...masterArray, ...specialCharacters];
}
let randomPassword = " ";
for (let i = 0; i < passwordLength; i++) {
randomPassword += masterArray[Math.floor(Math.random() * (masterArray.length))];
console.log(Math.floor(Math.random() * (masterArray.length)));
console.log(randomPassword);
}
return randomPassword;

}
// Write password to the #password input
function writePassword() {
  var passwordText;
  delete(passwordText);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener ("click", writePassword)