// Problem 6. Maximal Sequence
// Write a JavaScript function findMaxSequence(value) that finds the maximal sequence
// of equal elements in an array and returns the result as an array. If there is more
// than one sequence with the same maximal length, print the rightmost one.
// Write JS program sequenceFinder.js that invokes your function with the sample input
// data below and prints the output at the console.

function findMaxSequence(value) {
    'use strict';
    var count = 1,
        maxCount = 1,
        currentIndex = 0,
        result = [],
        i;
    if (value.length === 1) {
        return console.log(value);
    }
    for (i = 0; i < value.length - 1; i += 1) {
        if (value[i] === value[i + 1]) {
            count += 1;
            if (count >= maxCount) {
                maxCount = count;
            }
        } else {
            count = 1;
            currentIndex = i;
        }
    }
    if (maxCount === value.length) {
        return console.log(value);
    }
    result = value.slice(currentIndex - maxCount + 1, currentIndex + 1);
    console.log(result);
}
findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);
//findMaxSequence([3, 3, 3, 3, 3, 3, 3]); //works
