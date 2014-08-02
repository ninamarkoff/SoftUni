// Problem 4. Numbers Only Field
// Write a HTML page holding a form and a text field. Using JavaScript make the text field to
// accept numbers only. When a non-number character is entered through the keyboard
// (or by any other way), make the field red for a while and do not accept the change
// (preserve the previous value of the field).

(function () {
    'use strict';
    var input,
        output;

    input = document.getElementById('input');
    output = document.getElementById('output');
    console.log(input);
    function setInputWhiteColor() {
        output.style.backgroundColor = 'white';
    }

    function setInputRedColor() {
        output.style.backgroundColor = 'red';
    }

    input.addEventListener('keyup', function () {
        if (input.value === '') {
            output.value = '';
        } else if (input.value.match(/[0-9]+/)[0] === input.value) {
            output.value = this.value;
        } else {
            setInputRedColor();
            output.value = this.value.match(/[0-9]+/)[0];
            setTimeout(setInputWhiteColor, 1000);
        }
        if (input.value === '') {
            output.value = '';
        }
    });
}());
