// Assignment Code
var generateBtn = document.querySelector("#generate");
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArray = ["#", "@"];
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerString.split("");
var upperString = lowerString.toUpperCase();
var upperArray = upperString.split("");
var totalArray = [];
function askuser() {
  var passlength = window.prompt("howlong");
  var isNum = confirm("would you like numbers?");
  var isSpecial = confirm("would you like numbers?");
  var isLower = confirm("would you like numbers?");
  var isUpper = confirm("would you like numbers?");
  if (isNum === true) {
    totalArray = totalArray.concat(numArray);
  }
  if (isSpecial === true) {
    totalArray = totalArray.concat(specialArray);
  }
  if (isLower === true) {
    totalArray = totalArray.concat(lowerArray);
  }
  if (isUpper === true) {
    totalArray = totalArray.concat(upperArray);
  }
  return parseInt(passlength);
}

function generatePassword() {
var length= askuser();
var results=[];
for(var i=0;i<length;i++){
  var index=Math.floor(Math.random()*totalArray.length)
  var digit=totalArray[index]
  results.push(digit)
}
  return results.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
