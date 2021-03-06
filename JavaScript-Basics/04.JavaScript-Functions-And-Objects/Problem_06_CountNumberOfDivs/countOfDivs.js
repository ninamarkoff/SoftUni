// Problem 6. Count Number of DIVs
// Write a JavaScript function countDivs(html) to count the number of all DIVs in given HTML
// fragment passed as string. Write a JS program countOfDivs.js that invokes your function
// and prints the output at the console.

function countDivs(html) {
    'use strict';

    var i,
        couuntOfDivs,
        index;

    couuntOfDivs = 0;

    while (html.indexOf('<div', index) !== -1) {
        couuntOfDivs += 1;
        index = html.indexOf('<div', index) + 4;
    }

    console.log(couuntOfDivs);
}

countDivs('<!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title>index</title>' +
            '<script src="/yourScript.js" defer></script>' +
        '</head><body><div id="outerDiv"><div class="first">' +
                    '<div><div>hello</div></div></div>' +
                '<div>hi<div></div></div><div>I am a div</div></div></body></html>');
