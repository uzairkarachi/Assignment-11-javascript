// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userInput = prompt("Enter a positive integer:");
var parsedInput = parseFloat(userInput);
document.write("Number: " + parsedInput + "<br>");
document.write("Round off value: " + Math.round(parsedInput) + "<br>");
document.write("Floor value: " + Math.floor(parsedInput) + "<br>");
document.write("Ceil value: " + Math.ceil(parsedInput) + "<br>");



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// MATH METHODS | JAVASCRIPT
// Page 2 of 5

var userInput = prompt("Enter a negative floating-point number:");
var parsedInput = parseFloat(userInput);
document.write("Number: " + parsedInput + "<br>");
document.write("Round off value: " + Math.round(parsedInput) + "<br>");
document.write("Floor value: " + Math.floor(parsedInput) + "<br>");
document.write("Ceil value: " + Math.ceil(parsedInput) + "<br>");





// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var number = -4;
var absoluteValue = Math.abs(number);
document.write("Absolute value of " + number + " is " + absoluteValue + "<br>");






// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// MATH METHODS | JAVASCRIPT
// Page 3 of 5
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + diceValue + "<br>");





// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
var coinToss = Math.floor(Math.random() * 2);
if (coinToss === 0) {
    document.write("Random coin value: Tails<br>");
} else {
    document.write("Random coin value: Heads<br>");
}




// 6. Write a program that shows a random number between 1
// and 100 in your browser.
// MATH METHODS | JAVASCRIPT
// Page 4 of 5
var randomNum = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNum + "<br>");





// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var weightInput = prompt("Enter your weight (in kilograms):");
var parsedWeight = parseFloat(weightInput);
if (!isNaN(parsedWeight)) {
    document.write("The weight of user is " + parsedWeight + " kilograms.<br>");
} else {
    document.write("Invalid input. Please enter a valid number.<br>");
}




// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = prompt("Guess a number between 1 and 10:");
var parsedGuess = parseInt(userGuess);
if (parsedGuess === secretNumber) {
    document.write("Congratulations! Your guess is correct.<br>");
} else {
    document.write("Sorry, your guess is incorrect. The secret number was " + secretNumber + ".<br>");
}