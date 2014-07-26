// Problem 15. Most Frequent Word
// Write a JavaScript function findMostFreqWord(value) that finds the most frequent word
// in a text and prints it, as well as how many times it appears in format "word -> count".
// Consider any non-letter character as a word separator. Ignore the character casing.
// If several words have the same maximal frequency, print all of them in alphabetical order.
// Write JS program frequentWord.js that invokes your function with the sample input data
// below and prints the output at the console.

function findMostFreqWord(value) {
    'use strict';
    var i,
        splittedText,
        obj = {},
        key,
        values = [],
        topFrequency,
        keysAlphabetically = [];
    value = value.toLowerCase();
    splittedText = value.split(/[^a-zA-z]+/).filter(function (item) {
        return item !== '';
    });
    for (i = 0; i < splittedText.length; i += 1) {
        if (obj[splittedText[i]]) {
            obj[splittedText[i]] += 1;
        } else {
            obj[splittedText[i]] = 1;
        }
    }
    for (key in obj) {
        values.push(obj[key]);
    }
    values = values.sort(function (first, second) {
        return first - second;
    });
    topFrequency = values[values.length - 1];
    keysAlphabetically = Object.keys(obj).sort();
    for (i = 0; i < keysAlphabetically.length; i += 1) {
        if (obj[keysAlphabetically[i]] === topFrequency) {
            console.log(keysAlphabetically[i] + ' -> ' + obj[keysAlphabetically[i]]);
        }
    }
}
findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');