//Problem 10. Digit Checker
//Write a JavaScript function checkDigit(value) that finds if the third digit (right-to-left)
//of an integer number n (n>1000) is 3. Write JS program digitChecker.js that checks a few numbers.
//The result (true or false) should be printed on the console.
//Run the program through Node.js.

function checkDigit(value) {
    'use strict';
    var valueAsString;
    valueAsString = value.toString();
    console.log(valueAsString[valueAsString.length - 3] === '3');
}
checkDigit(1235);
checkDigit(25368);
checkDigit(123456);