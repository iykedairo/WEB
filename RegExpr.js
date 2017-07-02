// JavaScript Document
(function(){
//3xters in a row not allowed
var ThreeXters = /([\s\S])\1\1/;
var US_Phone = /\d{3}-\d{3}-\d{4}/;
//at least a 1, an a, a Z, and a [@#$%] range 6-20
var pass = 
/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
//?= means apply the assertion condition
var pss = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@#$%_-]{8,20}$/;
var ps = /(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?!.*\\s)(?=.*[._/-])[a-zA-Z].{8,23}/;

var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
1

var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
/*
requirements:

Length between 8 and 32 characters.

One or more uppercase letters.

One or more lowercase letters.

One or more numbers.

One or more special characters (ASCII punctuation or space characters).



*/
function validate(password) { var minMaxLength = /^[\s\S]{8,32}$/, 
upper = /[A-Z]/, 
lower = /[a-z]/, 
number = /[0-9]/, 
special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/; 
if (minMaxLength.test(password) && upper.test(password) && lower.test(password) && number.test(password) && special.test(password) ) {
	 return true; }
	  return false; 
	  }
	  /*
This next example enforces a minimum and maximum password length (8–32 characters), and additionally requires that at least three of the following four character types are present:

One or more uppercase letters.

One or more lowercase letters.

One or more numbers.

One or more special characters (anything other than ASCII letters and numbers).
*/
function validate(password) { var minMaxLength = /^[\s\S]{8,32}$/, 
upper = /[A-Z]/, 
lower = /[a-z]/, 
number = /[0-9]/, 
special = /[^A-Za-z0-9]/, count = 0; 
if (minMaxLength.test(password)) { // Only need 3 out of 4 of these to match 
if (upper.test(password)) 
count++; 
if (lower.test(password)) 
count++; 
if (number.test(password)) 
count++; 
if (special.test(password)) 
count++; 
} 
return count >= 3; 
}

function validate(password) { var minMaxLength = /^[\s\S]{8,32}$/,
 upper = /[A-Z]/, 
 lower = /[a-z]/, 
 number = /[0-9]/, 
 special = /[^A-Za-z0-9]/, count = 0; 
if(minMaxLength.test(password)) { // Only need 3 out of 4 of these to match if (upper.test(password))
 count++; 
 if(lower.test(password)) count++; 
 if(number.test(password)) count++; 
 if(special.test(password)) count++; } return count >= 3; }
/*
This final code example is the most complicated of the bunch. It assigns a positive or negative score to various conditions, and uses the regexes we’ve been looking at to help calculate an overall score for the provided password. TherankPassword function returns a number from 0–4that corresponds to the password rankings “Too Short,” “Weak,” “Medium,” “Strong,” and “Very Strong”:
*/


var rank = {
TOO_SHORT: 0, 
WEAK: 1, 
MEDIUM: 2, 
STRONG: 3, 
VERY_STRONG: 4 
}; 
function rankPassword(password){ 
var upper = /[A-Z]/, 
lower = /[a-z]/, 
number = /[0-9]/, 
special = /[^A-Za-z0-9]/, 
minLength = 8, 
score = 0; 
if (password.length < minLength) { 
return rank.TOO_SHORT; // End early 
} // Increment the score for each of these conditions 
if (upper.test(password)) score++; 
if (lower.test(password)) score++; 
if (number.test(password)) score++; 
if (special.test(password)) score++; // Penalize if there aren't at least three char types 
if (score < 3) score--; 
if (password.length > minLength) { // Increment the score for every 2 chars longer than the minimum 
score += Math.floor((password.length - minLength) / 2); } // Return a ranking based on the calculated score 
if (score < 3) return rank.WEAK; // score is 2 or lower if (score < 4) 
return rank.MEDIUM; // score is 3 
if (score < 6) return rank.STRONG; // score is 4 or 5 
return rank.VERY_STRONG; // score is 6 or higher 
} // Test it... 
var result = rankPassword("password1"), labels = ["Too Short", "Weak", "Medium", "Strong", "Very Strong"]; 
alert(labels[result]); // -> Weak


var Az09_- =
	 /^([a-zA-Z0-9 _-]+)$/,
min1$ = /^\s*([0-9a-zA-Z]+)\s*$/,
//ie min of one xter
zeroOr1$ = /^\s*([0-9a-zA-Z]*)\s*$/,
//ie zero or more characters
xtersOnly = /[^a-z\d]/i,
Az09_only = /^\w+$/,
O1_10_1num = /^(?=.*\d)(?=.*[A-Za-z])[A-Za-z0-9]{1,10}$/,
//ie 1 to 10 + at least one number
alphNum = /^([A-Za-z]|[0-9]|_)+$/,
o1Az109 = /^([a-zA-Z_]{1,}\d{1,})+|(\d{1,}[a-zA-Z_]{1,})+$/,
//at least 1 alpha & 1 number
})