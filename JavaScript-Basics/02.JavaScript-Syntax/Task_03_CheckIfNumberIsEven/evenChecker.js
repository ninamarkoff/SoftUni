//Problem 3. Check if Number is Even
//Write a JavaScript function evenNumber(value) that checks if an integer number is even.
//Write JS program evenChecker.js to check if a few numbers are even.
//The result should be printed on the console (true or false).
//Run the program through Node.js.

function evenNumber(value) {
    'use strict';
    console.log(value % 2 === 0);
}
evenNumber(3);
evenNumber(127);
evenNumber(588);