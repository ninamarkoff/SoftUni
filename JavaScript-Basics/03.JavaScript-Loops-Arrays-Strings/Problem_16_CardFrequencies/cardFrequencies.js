// Problem 16. Cards Frequencies
// Write a JavaScript function findCardFrequency(value) that that accepts the following parameters:
// array of several cards (face + suit), separated by a space. The function calculates and prints at
// the console the frequency of each card face in format "card_face -> frequency". The frequency is
// calculated by the formula appearances / N and is expressed in percentages with exactly 2 digits
// after the decimal point. The card faces with their frequency should be printed in the order of
// the card face's first appearance in the input. The same card can appear multiple times in the
// input, but its face should be listed only once in the output. Write JS program cardFrequencies.js
// that invokes your function with the sample input data below and prints the output at the console.

function indCardFrequency(value) {
    'use strict';
    var i,
        splittedValue,
        faces = [],
        obj = {},
        boolObj = {},
        key;
    splittedValue = value.split(' ');
    splittedValue.map(function (item) {
        faces.push(item.slice(0, item.length - 1));
    });
    for (i = 0; i < faces.length; i += 1) {
        if (obj[faces[i]]) {
            obj[faces[i]] += 1;
        } else {
            obj[faces[i]] = 1;
        }
    }
    for (key in obj) {
        boolObj[key] = true;
    }
    for (i = 0; i < faces.length; i += 1) {
        if (boolObj[faces[i]]) {
            console.log(faces[i] + ' -> ' + (obj[faces[i]] / faces.length * 100).toFixed(2) + '%');
            boolObj[faces[i]] = false;
        }
    }
}
indCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
indCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
indCardFrequency('10♣ 10♥');