// Problem 5. Reverse Every Word in a String
// Write a JavaScript function reverseWordsInString(str) to reverse the characters of every word
// in the string but leaves the words in the same order. Words are considered to be sequences of
// characters separated by spaces. Write a JavaScript program reverseWords.js that prints on the
// console the output of the examples below

function reverseWordsInString(str) {
    'use strict';

    var i,
        j,
        strAsWords,
        reversedWord,
        output;

    strAsWords = str.split(' ');
    strAsWords = strAsWords.filter(Boolean);

    function reverseWord(word) {
        reversedWord = [];
        for (j = 0; j < word.length; j += 1) {
            reversedWord[j] = word[word.length - 1 - j];
        }
        return reversedWord.join('');
    }

    output = [];

    for (i = 0; i < strAsWords.length; i += 1) {
        output.push(reverseWord(strAsWords[i]));
    }

    console.log(output.join(' '));
}

reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');
