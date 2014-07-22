//Problem 7. The Lifetime Supply Calculator
//Write a JavaScript function calcSupply(value) that accepts the following parameters:
//your age, your maximum age, estimate amount of your favorite food per day (as a number).
//The function calculates how many of the food you will eat for the rest of your life.
//Write JS program lifetimeSupplyCalc.js that calculates the amount of a few foods that you will eat.
//The result should be printed on the console.
//Run the program through Node.js.
//Note: we assume that there are no leap years.

function calcSupply(age, maxAge, foodPerDay) {
    'use strict';
    var DAYS_IN_YEAR = 365, totalFood;
    totalFood = (maxAge - age) * DAYS_IN_YEAR * foodPerDay;
    console.log(totalFood + 'kg of fruits would be enough until I am ' + maxAge + ' years old.');
}
calcSupply(38, 118, 0.5);
calcSupply(20, 87, 2);
calcSupply(16, 102, 1.1);