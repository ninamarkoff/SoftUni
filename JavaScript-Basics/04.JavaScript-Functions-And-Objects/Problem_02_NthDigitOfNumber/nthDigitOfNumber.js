// Problem 2. N-th Digit of Number
// Write a JavaScript function findNthDigit(arr) that accepts as a parameter an array of
// two numbers num and n and returns the n-th digit of given decimal number num counted
// from right to left. Return undefined when the number does not have n-th digit.
// Write a JS program nthDigitOfNumber.js that invokes your function with the sample
// input data below and prints the output at the console.

function findNthDigit(arr) {
    'use strict';
    var number,
        nthDigitNumber,
        hasDigits,
        counter,
        nthDigit;

//Won't make explicit check for correct input data
    number = Math.abs(arr[1]);
    nthDigitNumber = arr[0];
    hasDigits = number > 0;
    counter = 0;

    while (number !== Math.floor(number)) {
        number = number * 10;
    }

    while (hasDigits && counter < nthDigitNumber) {
        nthDigit = number % 10;
        number = Math.floor(number / 10);
        hasDigits = number > 0;
        counter += 1;
    }

    if (counter === nthDigitNumber) {
        console.log(nthDigit);
    } else {
        console.log('The number doesn’t have ' + nthDigitNumber + ' digits');

    }
}

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);


