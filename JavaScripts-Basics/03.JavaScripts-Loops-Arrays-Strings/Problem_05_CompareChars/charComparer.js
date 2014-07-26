// Problem 5. Compare Chars
// Write a JavaScript function compareChars(value) that compares two arrays of chars
// lexicographically (letter by letter). Write JS program charComparer.js that invokes
// your function with the sample input data below and prints the output at the console.

function compareChars(array1, array2) {
    'use strict';
    var i,
        equal = true;
    if (array1.length !== array2.length) {
        equal = false;
    } else {
        for (i = 0; i < array1.length; i += 1) {
            if (array1[i] !== array2[i]) {
                equal = false;
                break;
            }
        }
    }
    if (equal) {
        console.log('Equal');
    } else {
        console.log('Not Equal');
    }
}
compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
             ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);