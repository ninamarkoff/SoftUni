//Problem 12. Variables
//Write a JavaScript function variablesTypes(value) that accepts the following parameters: name, age,
//isMale (true or false), array of your favorite foods. The function must return the values of the variables
//and their types.

function variablesTypes(params) {
    'use strict';
    var foodsAsString = '', i, name, age, isMale, foods;
    name = params[0];
    age = params[1];
    isMale = params[2];
    foods = params[3];
    for (i = 0; i < foods.length; i += 1) {
       foodsAsString += foods[i];
        if (i !== foods.length - 1) {
            foodsAsString += ',';
        }
    }
    console.log('My name: ' + name + '//type is ' + typeof name);
    console.log('My age: ' + age + '//type is ' + typeof age);
    console.log('I am male: ' + isMale + '//type is ' + typeof isMale);
    console.log('My favourite foods are: ' + foodsAsString + '//type is ' + typeof foods);
}
variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]);