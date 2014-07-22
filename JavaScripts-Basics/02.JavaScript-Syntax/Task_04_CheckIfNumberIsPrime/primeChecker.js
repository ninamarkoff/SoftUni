//Problem 4. Check if Number is Prime
//Write a JavaScript function isPrime(value) that checks if an integer number is prime.
//Write JS program primeChecker.js that checks if a few numbers are prime.
//The result should be printed on the console (true or false) on the console.
//Run the program through Node.js.

function isPrime(value) {
    'use strict';
    var i, isNumberPrime = true;
    for (i = 2; i <= Math.floor(Math.sqrt(value)); i += 1) {
        if (value % 2 === 0) {
            isNumberPrime = false;
            break;
        }
    }
    console.log(isNumberPrime);
}
isPrime(7);
isPrime(254);
isPrime(587);