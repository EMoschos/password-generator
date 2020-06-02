
//I began using the below arrays but found an easier solution using "strings" and the "substring" conditional

// var aUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var aLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var sChara = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

// console.log(aUpper.length);
// console.log(aLower.length);
// console.log(num.length);
// console.log(sChara.length)

//I used "console.log" alot to ensure i was returning the results i was expecting.  It was very helpful in determining errors in the code.

function genPassword(le, lo, up, nu, ch) {
  var aUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var aLower = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  var sChara = "!#$%&()*+/:;<=>?@[\]{|}~";
  console.log(aUpper.length);
  console.log(aLower.length);
  console.log(num.length);
  console.log(sChara.length);
  console.log(le);

  //I used passFirst to build the string through "confirm" selections.  i.e. If (lo) - Which is lowercase was selected then the variable passfirst will have the 'aLower' variable string added to it
  var passFirst = "";
  if (lo) { passFirst += aLower };
  if (up) { passFirst += aUpper };
  if (nu) { passFirst += num };
  if (ch) { passFirst += sChara };
  console.log(passFirst);
  console.log(passFirst.length);
  
  //passFinal is where the work happens in building the password.  The math.random was used in combination with "substring" through a 'for loop' to extract a character out of the built up string from passFirst.  The amount of times to 'for loop' ran is determined by the length of the password required by the user.  This was then printed to the webpage
  var passFinal = "";
  for (var i = 0; i < le; i++) {
    var b = Math.floor(Math.random() * passFirst.length);
    passFinal += passFirst.substring(b, b + 1);
    console.log(passFinal);
  }
  document.getElementById("password").innerHTML = passFinal;
}
  //before the functions could run i set a series of criteria that needed to be met according to the acceptance criteria.
function passCriteria() {
  var passLength = prompt("Password Length: Pick a number between 8 - 128");
  console.log(passLength);
  var passLength = parseInt(passLength);
  if (passLength >= 8 && passLength <= 128) {
    alert("You will get a password " + passLength + " characters long!");
    var lowerChoice = confirm("Do you want to include lowercase Letters? (OK=Yes Cancel=No)");
    console.log(lowerChoice);
    var upperChoice = confirm("Do you want to include UPPERcase Letters? (OK=Yes Cancel=No)");
    console.log(upperChoice);
    var numChoice = confirm("Do you want to include Number's? (OK=Yes Cancel=No)");
    console.log(numChoice);
    var charaChoice = confirm("Do you want to include Special Character's? (OK=Yes Cancel=No)");
    console.log(charaChoice);
    if (lowerChoice || upperChoice || numChoice || charaChoice) {
      alert("Running Password generator");
      genPassword(passLength, lowerChoice, upperChoice, numChoice, charaChoice);
    }
    else {
      alert("You need to pick atleast one character set")
    }
  }
  else {
    alert("you need to pick a number between 8 - 128");
  }
}

//I felt i did not need to use the code below and therefore commented it out.  I ran this past the teaching assistant and he seemed ok with it.

// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
