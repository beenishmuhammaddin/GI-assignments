//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
 //Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
 //• Print a new set of invitation messages, one for each person in your list.

 // Step 1: Define an initial list of guests for a dinner party.
let guests: string[] = ["Bali Sakina", "Mudabbir Ahmed", "Zarnish"];

// Step 2: Announce that a larger dinner table has been found.
// This informs everyone that there's enough space to add more guests.
console.log("Great news, everyone! I've found a bigger dinner table, so we have more space available. More friends can join us for dinner.");

// Step 3: Add a new guest named 'bella' to the beginning of the array.
// Adding to the beginning might be to honor a special guest.
guests.unshift('bella');

// Step 4: Calculate the middle index using bitwise operations for integer division.
// This ensures a whole number index suitable for array indexing.
const middleIndex: number = (guests.length / 2) | 0;

// Step 5: Add a new guest named 'asif' to the middle of the array.
// Inserting in the middle helps maintain a balanced guest list.
guests.splice(middleIndex, 0, 'asif');

// Step 6: Add another guest named 'jv' to the end of the list.
// Guests typically added at the end are last-minute additions.
guests.push('jv');

// Step 7: Print invitation messages for each guest.
// This confirms their invitation and helps them feel welcome.
guests.forEach(guest => {
   // console.log(`Dear ${guest}, I'm thrilled to invite you to dinner at my place. Looking forward to an enjoyable evening together!`);
});

// Step 8: Log the calculated middle index to the console.
//console.log("Middle index:", middleIndex);
