// Problem 3. Properties
// Write a JavaScript function displayProperties(value) that displays all the properties of the
// "document" object in alphabetical order. Write a JS program docProperties.js that invokes your
// function with the sample input data below and prints the output at the console.


(function displayProperties() {
    'use strict';
    var prop;
    for (prop in document) {
        console.log(prop);
    }
}());