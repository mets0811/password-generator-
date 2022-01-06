// Assignment Code
var generateBtn = document.querySelector("#generate");
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArray = ["#", "@","!","%","$"];
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerString.split("");
var upperString = lowerString.toUpperCase();
var upperArray = upperString.split("");
var totalArray = [];
var selected = 0;
var choices = "";

function askUser() {
  //prompt for the length
  var passLength = window.prompt("How long do you want your password to be? It can be between 8 and 128 characters.");
  //turning the string into an integer
  passLength = parseInt(passLength);
  //checking if the password is the correct length and is a number
  while (passLength < 8 || passLength > 128 || passLength != Number(passLength)) {
    //redo the prompt and parseInt logic
    passLength = window.prompt("That is not a valid length. Please enter another length.");
    passLength = parseInt(passLength);
  }

  while (selected === 0 || correctChoices === false) {
    //confirms for the different arrays of characters
    alert("Please choose the characters you want to include in your pass word. You must choose at least one.");
    var isNum = confirm("Would you like to include numbers?");
    var isSpecial = confirm("Would you like to include special characters?");
    var isLower = confirm("would you like to include lowercase letters?");
    var isUpper = confirm("would you like to include uppercase letters?");

    if (isNum === true) {
      totalArray = totalArray.concat(numArray);
      selected++;
      choices += "numbers ";
    }

    if (isSpecial === true) {
      totalArray = totalArray.concat(specialArray);
      selected++;
      choices += "special ";
    }

    if (isLower === true) {
      totalArray = totalArray.concat(lowerArray);
      selected++;
      choices += "lowercase ";
    }

    if (isUpper === true) {
      totalArray = totalArray.concat(upperArray);
      selected++;
      choices = choices + "uppercase";
    }

    //trim to remove spaces at ends of strings
    //split to seperate each word into an array
    //join to make a string where each word has a comma and space between
    choices = choices.trim().split(" ").join(", ");

    //checks if the selections are correct
    if (selected > 0) {
      var correctChoices = confirm("You have chosen: " + choices + ". Is that correct?");

      //if wrong choices, reset selections and choices
      if (correctChoices === false) {
        selected = 0;
        choices = "";
      }
    }
  }
  //resets for additional passwords generated
  selected = 0;
  choices = "";
  //returns length
  return passLength;
}

function generatePassword() {
var length = askUser();
var results = [];
for(var i=0;i<length;i++){
  var index=Math.floor(Math.random()*totalArray.length);
  var digit=totalArray[index];
  results.push(digit);
}
  return results.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
