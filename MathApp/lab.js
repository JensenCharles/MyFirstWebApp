var userName = window.prompt("Please enter your name");
var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName;

var number1 = parseInt(window.prompt("Enter a number"));
var number2 = parseInt(window.prompt("Enter another number"));

var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");

operand1.innerHTML += " " + number1;
operand2.innerHTML += " " + number2;

var sum = number1 + number2;
var diff = number1 - number2;
var mult = number1 * number2;
var div = number1 / number2;
var mod = number1 % number2;

document.getElementById("addition").innerHTML =
"The sum of " + number1 + " and " + number2 + " is " + sum;

document.getElementById("subtraction").innerHTML =
"The difference of " + number1 + " and " + number2 + " is " + diff;

document.getElementById("multiplication").innerHTML =
"The product of " + number1 + " and " + number2 + " is " + mult;

document.getElementById("division").innerHTML =
"The quotient of " + number1 + " and " + number2 + " is " + div;

document.getElementById("modulus").innerHTML =
"The remainder of " + number1 + " and " + number2 + " is " + mod;









