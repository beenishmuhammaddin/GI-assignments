"use strict";
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Step 2: Create person objects
const person1 = {
    name: "bg",
    age: 30,
    city: "Karachi"
};
const person2 = {
    name: "bella",
    age: 25,
    city: "Lahore"
};
// Step 3: Store persons in an array
const people = [person1, person2];
// Displaying the contents of the array
console.log(people);
// Optionally, print each person's details
people.forEach(person => {
    console.log(`${person.name} is ${person.age} years old and lives in ${person.city}.`);
});
