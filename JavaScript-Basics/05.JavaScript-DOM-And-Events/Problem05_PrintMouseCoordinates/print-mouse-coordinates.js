// Problem 5. Print Mouse Coordinates
// Write a JavaScript code that prints the mouse coordinates in a text area when we
// move the mouse over the HTML document. A sample output might be as follows:

(function () {
    'use strict';

    var result,
        coordinates = [],
        date;

    result = document.getElementById('result');

    document.addEventListener('mousedown', function (e) {
        coordinates[0] = 'X:' + e.pageX;
        coordinates[1] = 'Y:' + e.pageY;
        date = new Date();
        result.value += coordinates[0] + '; ' + coordinates[1] + ' Time: ' + date + '\n';
    });
}());