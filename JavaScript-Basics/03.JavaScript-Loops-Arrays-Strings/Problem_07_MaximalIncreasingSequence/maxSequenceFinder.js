// Problem 7. Maximal Increasing Sequence
// Write a JavaScript function findMaxSequence(value) that finds the maximal increasing sequence
// in an array of numbers and returns the result as an array. If there is no increasing sequence
// the function returns 'no'. Write JS program maxSequenceFinder.js that invokes your function
// with the sample input data below and prints the output at the console.

function findMaxSequence(value) {
    'use strict';
    var count = 1,
        maxCount = 1,
        currentIndex = 0,
        result = [],
        i;
    if (value.length === 1) {
        return console.log('no');
    }
    for (i = 0; i < value.length - 1; i += 1) {
        if (value[i] < value[i + 1]) {
            count += 1;
            if (count > maxCount) {
                maxCount = count;
                currentIndex = i;
            }
        } else {
            count = 1;
        }
    }
    if (maxCount === 1) {
        return console.log('no');
    }
    result = value.slice(currentIndex - maxCount + 2, currentIndex + 2);
    return(console.log(result));
}
findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);