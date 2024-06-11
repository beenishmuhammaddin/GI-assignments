//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// Define a person interface
interface Person {
    name: string;
    age: number;
    city: string;
}

// Create person objects
const person1: Person = {
    name: "Ali",
    age: 30,
    city: "Karachi"
};

const person2: Person = {
    name: "Sara",
    age: 25,
    city: "Lahore"
};

// Store persons in an array
const people: Person[] = [person1, person2];

// Intentionally accessing an out-of-bounds index
console.log("Trying to access index 2:");
const personAtIndex = people[2]; // There is no index 2

// Check if the accessed element exists
if (personAtIndex === undefined) {
    console.log("Error: Index out of bounds.");
} else {
    console.log(`${personAtIndex.name} is ${personAtIndex.age} years old and lives in ${personAtIndex.city}.`);
}


