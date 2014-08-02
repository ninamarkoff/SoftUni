// Problem 2. Find Min and Max Number
// Write a JavaScript function findMinAndMax(value) that accepts as parameter an array of numbers.
// The function finds the minimum and the maximum number. Write a JS program minMaxNumbers.js
// that invokes your function with the sample input data below and prints the output at the console.

function findMinAndMax(value) {
    'use strict';
    function isBigger(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    value.sort(isBigger);
    console.log('Min ->  ' + value[0]);
    console.log('Max ->  ' + value[value.length - 1]);
}
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);