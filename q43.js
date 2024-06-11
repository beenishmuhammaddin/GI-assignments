//define the function to show magicians names:-
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map() it will modify array:-
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
//define an array of magicians names
var magician_names = ["harry poter", "mudabbir", "zohan"];
//making a copy of orignak array through .slice() function:-
var copy_magician_names = magician_names.slice();
//modify the copied array to include "the great" with thier names:-
var copy_great_magicians = make_great(copy_magician_names);
//show both arrays original and copied:-
//original:-
console.log("orignal array\n");
show_magicians(magician_names);
//copied
console.log("orignal array\n");
show_magicians(copy_great_magicians);
