"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
// Step 1: Store the locations in an array in non-alphabetical order
let placesToVisit = ["swat", "sialkot", "lahore", "islamabad", "karachi"];
// Step 2: Print the array in its original order
console.log("Original order:", placesToVisit);
// Step 3: Print the array in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());
// Step 4: Show that the original array is still in its original order
console.log("Original order (again):", placesToVisit);
// Step 5: Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// Step 6: Show that the original array is still in its original order
console.log("Original order (again):", placesToVisit);
// Step 7: Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Step 8: Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Original order (again):", placesToVisit);
// Step 9: Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
// Step 10: Sort the array in reverse alphabetical order
console.log("Sorted in reverse alphabetical order:", placesToVisit);
