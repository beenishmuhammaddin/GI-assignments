// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Start with the initial list of guests from Exercise 16
let guests: string[] = ['bali sakina','mudabbir ahmed','zarnish','bella','asif'];

// Inform about the limitation of only two guests
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guests.length > 2) {
    const removedGuest: string = guests.pop()!;
    console.log(`Sorry, ${removedGuest}, but we can't invite you to dinner.`);
}

// Print messages to the two remaining guests
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner!`);
});

// Remove the last two names from the list
guests.splice(0, 2);

// Print the final list to ensure it's empty
console.log("Final list of guests:", guests);
