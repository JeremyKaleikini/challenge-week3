// Assignment code here
var resultEL = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function generatePassword() {
  let generatePassword = "";
  let passwordlength = prompt("How many characters would you like your password to be?");
  var lowercase = "abcdefghijklmnopqrstuvwxyz(".split("")
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ(".split("")
  var symbols = "!@#$%^&*()".split("")
  var numbers = "1234567890".split("")
  var useLowercase = confirm("The use of lower case letters")
  var useUppercase = confirm("The use of upper case letters")
  var useSymbols = confirm("the use of symbols")
  var useNumbers = confirm("the use of numbers")


  if (passwordlength >=8 && passwordlength <=128){
    console.log(passwordlength)
  }
  for (var i = 0; i < passwordlength; i++){
  }
  //var passwordText = document.querySelector("#password");
  document.getElementById("display").value = password;

//function to copy password to clipboard

  //passwordText.value = password;
 console.log(passwordlength)
 console.log(useLowercase)
}
generateBtn.addEventListener("click", generatePassword)

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);