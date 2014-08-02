// Problem 3. Number with Largest Sum of Digits
// Write a JavaScript function findLargestBySumOfDigits(nums) that takes as an input a sequence
// of positive integer numbers and returns the element with the largest sum of its digits.
// The function should take a variable number of arguments. It should return undefined when 0
// arguments are passed or when some of the arguments is not an integer number. Write a JS program
// largestSumOfDigits.js that invokes your function with the sample input data below and prints
// its output at the console.

function findLargestBySumOfDigits() {
    'use strict';
    var countOfArguments,
        i,
        sum,
        maxSum,
        maxSumOfDigitsNumber,
        nums;

    countOfArguments = arguments.length;
    nums = [];
    for (i = 0; i < arguments.length; i += 1) {
        nums.push(arguments[i]);
    }

    function isInteger(arr) {
        for (i = 0; i < arr.length; i += 1) {
            if (typeof arr[i] !== 'number' || Math.floor(Math.abs(arr[i])) !== Math.abs(arr[i])) {
                return false;
            }
        }
        return true;
    }

    function makePositive(arr) {
        for (i = 0; i < arr.length; i += 1) {
            arr[i] = Math.abs(arr[i]);
        }
    }

    function sumOfDigits(number) {
        sum = 0;
        while (number > 0) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        return sum;
    }

    if (countOfArguments && isInteger(nums)) {
        makePositive(nums);
        maxSum = 0;
        for (i = 0; i < nums.length; i += 1) {
            if (sumOfDigits(nums[i]) > maxSum) {
                maxSumOfDigitsNumber = arguments[i];
                maxSum = sumOfDigits(nums[i]);
            }
        }
        console.log(maxSumOfDigitsNumber);
    } else {
        console.log('undefined');
    }
}

findLargestBySumOfDigits(5, 10, 15, 111);
findLargestBySumOfDigits(33, 44, -99, 0, 20);
findLargestBySumOfDigits('hello');
findLargestBySumOfDigits(5, 3.3);
