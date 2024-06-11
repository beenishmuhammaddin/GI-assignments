"use strict";
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// Define the variable 'car' as a string
let car = 'subaru';
// Test 1: Check if 'car' is 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
// Test 2: Check if 'car' is 'toyota'
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False
// Test 3: Case sensitive comparison
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False
// Test 4: Check if 'car' is not 'audi'
console.log("Is car != 'audi'? I predict True.");
console.log(car != 'audi'); // True
// Test 5: Strict inequality for the same value but different types
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False
// Test 6: Numeric comparison for greater than
let speed = 60;
console.log("Is speed > 50? I predict True.");
console.log(speed > 50); // True
// Test 7: Numeric comparison for less than
console.log("Is speed < 30? I predict False.");
console.log(speed < 30); // False
// Test 8: Checking inclusion in an array
let colors = ['red', 'blue', 'green'];
console.log("Does colors include 'red'? I predict True.");
console.log(colors.includes('red')); // True
// Test 9: Checking absence in an array
console.log("Does colors include 'yellow'? I predict False.");
console.log(colors.includes('yellow')); // false
// Test 10: Boolean value check
let isElectric = false;
console.log("Is the car electric? I predict False.");
console.log(isElectric); // False
