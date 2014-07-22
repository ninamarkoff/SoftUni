//Problem 1. Powerful Cars
//Write a JavaScript function convertKWtoHP(value) to convert car’s kW into hp (horse power).
//Write a JS program powerfulCars.js that converts a few sample values to hp (see the examples below).
//The result should be printed on the console, rounded up to the second sign after the decimal point.
//Run the program through Node.js.

function convertKWtoHP(value) {
    'use strict';
    var HORSE_POWER_IN_KW = 0.745699872;
    console.log((value / HORSE_POWER_IN_KW).toFixed(2));
}

convertKWtoHP(75);
convertKWtoHP(150);
convertKWtoHP(1000);