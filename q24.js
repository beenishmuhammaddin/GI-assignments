"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
// Equality and Inequality with Strings
let city = 'New York';
console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York'); // True
console.log("Is city != 'London'? I predict True.");
console.log(city != 'London'); // True
console.log("Is city == 'Paris'? I predict False.");
console.log(city == 'Paris'); // False
// Tests using the lower case function
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); // True
console.log("Is city.toLowerCase() == 'new york' with uppercase? I predict False.");
console.log(city.toLowerCase() == 'NEW YORK'); // False
// Numerical tests involving equality and inequality, greater than and less than
let temperature = 23;
console.log("Is temperature == 23? I predict True.");
console.log(temperature == 23); // True
console.log("Is temperature != 25? I predict True.");
console.log(temperature != 25); // True
console.log("Is temperature > 20? I predict True.");
console.log(temperature > 20); // True
console.log("Is temperature < 23? I predict False.");
console.log(temperature < 23); // False
console.log("Is temperature >= 23? I predict True.");
console.log(temperature >= 23); // True
console.log("Is temperature <= 22? I predict False.");
console.log(temperature <= 22); // False
// Tests using "and" and "or" operators
console.log("Is temperature > 20 and temperature < 25? I predict True.");
console.log(temperature > 20 && temperature < 25); // True
console.log("Is temperature > 25 or temperature < 30? I predict True.");
console.log(temperature > 25 || temperature < 30); // True
console.log("Is temperature > 25 and temperature < 30? I predict False.");
console.log(temperature > 25 && temperature < 30); // False
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'cherry'];
console.log("Does fruits include 'banana'? I predict True.");
console.log(!fruits.includes('banana')); // True
console.log("Does fruits include 'orange'? I predict False.");
console.log(!fruits.includes('orange')); // False
// Test whether an item is not in an array
console.log("Is 'mango' not in fruits? I predict True.");
console.log(!fruits.includes('mango')); // True
console.log("Is 'apple' not in fruits? I predict False.");
console.log(!fruits.includes('apple')); // False
