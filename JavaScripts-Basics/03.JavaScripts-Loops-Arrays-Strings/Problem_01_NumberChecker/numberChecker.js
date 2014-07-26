//Problem 1. Number Checker
//Write a JavaScript function printNumbers(n) that accepts as parameter integer n.
//The function finds all integer numbers from 1 to n that are not divisible by 4 or by 5.
//Write a JS program numberChecker.js that invokes your function with the sample input
//data below and prints the output at the console.

function printNumbers(n) {
    'use strict';
    var result = [],
        i;
    for (i = 0; i <= n; i += 1) {
        if (i % 4 !== 0 && i % 5 !== 0) {
            result.push(i);
        }
    }
    if (result.length === 0) {
       console.log('no');
    }
    console.log(result);
}
printNumbers(20);
printNumbers(-5);
printNumbers(13);