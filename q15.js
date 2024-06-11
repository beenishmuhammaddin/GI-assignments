"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
// List of people to invite to dinner
exports.guestList = ["Bali Sakina", "Mudabbir Ahmed", "Zarnish"];
// Original invitations
console.log("Assalam-o-alaikum" + exports.guestList[0] + ", wanna grab dinner?");
console.log("Assalam-o-alaikum" + exports.guestList[1] + ", how about dinner?");
console.log("Assalam-o-alaikum" + exports.guestList[2] + ", are you free tonight? for dinner?");
// Letting guest who can't make it know
console.log("\nOops! " + exports.guestList[2] + " can't make it.");
// Update guest list with new invitee
exports.guestList[2] = "Bella";
// Updated invitations
console.log("\nHey " + exports.guestList[0] + ", wanna grab dinner?");
console.log("Hey " + exports.guestList[1] + ", how about dinner?");
console.log("Hey " + exports.guestList[2] + ", are you free tonight? for dinner?");
