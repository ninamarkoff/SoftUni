// Problem 11. Check the Brackets
// Write a JavaScript function checkBrackets(value) to check if in a given expression
// the brackets are put correctly. Write JS program bracketsChecker.js that invokes your
// function with the sample input data below and prints the output at the console.

function checkBrackets(value) {
    var queueOfOpeningParens = [],
        i;
    for (i = 0; i < value.length; i += 1) {
        if (value[i] === '(') {
            queueOfOpeningParens.push('(');
        } else if (value[i] === ')') {
            if (queueOfOpeningParens.length === 0) {
                return console.log('incorrect');
            }
            queueOfOpeningParens.pop();
        }
    }
    if (queueOfOpeningParens.length === 0) {
        return console.log('correct');
    }
    return console.log('incorrect');
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');
