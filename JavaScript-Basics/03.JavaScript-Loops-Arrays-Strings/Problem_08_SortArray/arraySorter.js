// Problem 8. Sort Array
// Sorting an array means to arrange its elements in increasing order.
// Write a JavaScript function sortArray(value) to sort an array.
// Use the "selection sort" algorithm: find the smallest element, move it
// at the first position, find the smallest from the rest, move it at the
// second position, etc. Write JS program arraySorter.js that invokes your
// function with the sample input data below and prints the output at the console.

function sortArray(value) {
    'use strict';
    var i,
        j,
        minElementIndex,
        currentMinElement,
        tempSwapValue;
    for (i = 0; i < value.length - 1; i += 1) {
        minElementIndex = i;
        currentMinElement = value[i];
        for (j = i + 1; j < value.length; j += 1) {
            if (currentMinElement > value[j]) {
                minElementIndex = j;
                currentMinElement = value[j];
            }
        }
        if (minElementIndex !== i) {
            tempSwapValue = value[i];
            value[i] = value[minElementIndex];
            value[minElementIndex] = tempSwapValue;
        }
    }
    console.log(value);
}
sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
