// Problem 14. Palindromes
// Write a JavaScript function findPalindromes(value) that extracts from a given text
// all palindromes, e.g. "ABBA", "lamal", "exe". Write JS program palindromesExtract.js
// that invokes your function with the sample input data below and prints the output at the console

function findPalindromes(value) {
    'use strict';
    var i,
        j,
        splittedText,
        result = [];

    function isWordPalindrome(word) {
        if (word.length === 1) {
            return true;
        }
        var limit = Math.floor(word.length / 2),
            isPalindrome = true;
        for (i = 0; i < limit; i += 1) {
            if (word[i] !== word[word.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }
        return isPalindrome;
    }

    splittedText = value.toLowerCase();
    splittedText = splittedText.split(/[^a-zA-z]+/).filter(function (item) {
        return item !== '';
    });
    for (j = 0; j < splittedText.length; j += 1) {
        if (isWordPalindrome(splittedText[j])) {
            result.push(splittedText[j]);
        }
    }
    console.log(result);
}

findPalindromes('There is a man, his name was Bob.');
