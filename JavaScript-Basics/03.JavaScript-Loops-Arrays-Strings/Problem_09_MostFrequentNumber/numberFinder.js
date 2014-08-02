// Problem 9. Most Frequent Number
// Write a JavaScript function findMostFreqNum(value) that finds the most frequent number in an array.
// If multiple numbers appear the same maximal number of times, print the leftmost of them.
// Write JS program numberFinder.js that invokes your function with the sample input data below
// and prints the output at the console.

function findMostFreqNum(value) {
    'use strict';
    var numbersCounted = {},
        counts = [],
        key,
        obj;

    function isBigger(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    function countEqualNumbersInSortedArray(array, startIndex) {
        var counter = 1;
        if (array.length === 1) {
            if (startIndex === 0) {
                numbersCounted[array[0]] = 1;
                return numbersCounted;
            }
            throw new Error('Invalid start index!');
        }
        if (startIndex > array.length - 1) {
            return numbersCounted;
        }
        while (array[startIndex] === array[startIndex + 1]) {
            counter += 1;
            startIndex += 1;
        }
        numbersCounted[array[startIndex - counter + 1]] = counter;
        return countEqualNumbersInSortedArray(array, startIndex + 1);
    }
    value = value.sort(isBigger);
    obj = countEqualNumbersInSortedArray(value, 0);
    for (key in obj) {
        counts.push(obj[key]);
    }
    counts = counts.sort(isBigger);
    for (key in obj) {
        if (obj[key] === counts[counts.length - 1]) {
            return console.log(key + ' (' + (obj[key]) + ' times)');
        }
    }
}
//Surely there are simpler ways to solve the problem
findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);