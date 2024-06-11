"use strict";
//Alien Colors #3: Turn your if-else chain from Exercise 25-24 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//•version 1:-
//using if and else -if statements.
let aliencolor1 = "green";
if (aliencolor1 === "green") {
    console.log("(version 1) you shot down green alien you have earned 5 points");
}
else if (aliencolor1 === "yellow") {
    console.log("you shot down yellow alien you have earned 10 points ");
}
else if (aliencolor1 === "red") {
    console.log("you shot down red alien you have earned 15 points");
}
//version 2:-
let aliencolor2 = "yellow";
if (aliencolor2 === "green") {
    console.log("you shot down green alien you have earned 5 points");
}
else if (aliencolor2 === "yellow") {
    console.log("(version 2)you shot down yellow alien you have earned 10 points");
}
else if (aliencolor2 === "red") {
    console.log("you shot down red alien you have earned 15 points");
}
//version 3:-
let aliencolor3 = "red";
if (aliencolor3 === "green") {
    console.log("you shot down green alien you have earned 5 points");
}
else if (aliencolor3 === "yellow") {
    console.log("you shot down yellow alien you have earned 10 points");
}
else if (aliencolor3 === "red") {
    console.log("(version 3)you shot down red alien you have earned 15 points");
}
