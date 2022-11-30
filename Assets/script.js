// Button press start
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input
function writePassword(time) {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log (password);
  return;
}

//
function generatePassword() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&()";
  var length = 12
  passlist =""

  for (var i = 0; i < length; ++i) { 
    passlist += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return passlist
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);


