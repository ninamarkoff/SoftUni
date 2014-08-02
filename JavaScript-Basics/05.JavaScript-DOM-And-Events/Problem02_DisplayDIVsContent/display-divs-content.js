// Problem 2. Display DIVs Content
// You are given a HTML file holding several <div> elements.
// Write a JavaScript code to print the text content of all <div> elements as unordered list

(function () {
    'use strict';
    var divs,
        ul,
        lis,
        frag,
        item,
        i;

    divs = document.querySelectorAll('div');
    console.log(divs);
    ul = document.getElementById('result');
    lis = [];
    frag = document.createDocumentFragment();
    for (i = 0; i < divs.length; i += 1) {
        lis[i] = document.createElement('li');
        lis[i].innerText = divs[i].innerText;
        if (lis[i].innerText !== '') {
            frag.appendChild(lis[i]);
        }
    }
    ul.appendChild(frag);
}());
