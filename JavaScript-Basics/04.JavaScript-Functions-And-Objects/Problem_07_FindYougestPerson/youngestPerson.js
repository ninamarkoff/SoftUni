// Problem 7. Find Youngest Person
// Write a JavaScript function findYoungestPerson(persons) that accepts as parameter an array of persons,
// finds the youngest person and returns his full name. Write a JS program youngestPerson.js to execute
// your function for the below examples and print the result at the console.

function findYoungestPerson(persons) {
    'use strict';

    var i,
        youngestPerson;

    youngestPerson = persons.sort(function (person1, person2) {
        return person1.age - person2.age;
    })[0];

    console.log('The youngest person is ' + youngestPerson.firstname + ' ' + youngestPerson.lastname);
}

findYoungestPerson([
    { firstname: 'George', lastname: 'Kolev', age: 32},
    { firstname: 'Bay', lastname: 'Ivan', age: 81},
    { firstname: 'Baba', lastname: 'Ginka', age: 40}
]);