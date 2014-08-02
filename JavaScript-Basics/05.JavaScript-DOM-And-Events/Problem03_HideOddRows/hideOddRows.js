// Problem 3. Hide Odd Rows
// You are given an HTML file holding a table of elements and a button titled "Hide Odd Rows".
// Write JavaScript code hideOddRows.js that attaches to the button click event and hides
// the odd rows of the table when clicked.

(function () {
    'use strict';
    var $hideButton;

    $hideButton = $('#btnHideOddRows');
    $hideButton.on('click', function () {
        $('table tr:nth-child(2n+1)').hide();
    });
}());
