// Problem 4. Create Array
// Write a JavaScript function createArray(value) that allocates array of 20 integers
// and initializes each element by its index multiplied by 5.
// Write JS program arrayBuilder.js that invokes your function with the sample input data
// below and prints the output at the console.

(function createArray() {
    'use strict';
    var arr = new Array(20),
        i;
    for (i = 0; i < arr.length; i += 1) {
        arr[i] = i * 5;
    }
    console.log(arr);
}());

