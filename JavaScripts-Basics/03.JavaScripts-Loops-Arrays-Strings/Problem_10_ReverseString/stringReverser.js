// Problem 10. Reverse String
// Write a JavaScript function reverseString(value) that reverses string and returns it.
// Write JS program stringReverser.js that invokes your function with the sample input data
// below and prints the output at the console.

function reverseString(value) {
    'use strict';
    var result = [],
        i;
    for (i = 0; i < value.length; i += 1) {
       result[i] = value[value.length - 1 - i];
    }
    result = result.join('');
    return console.log(result);
}

reverseString('sample');
reverseString('softUni');
reverseString('java script');

