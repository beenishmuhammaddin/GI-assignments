//define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians gr8 through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
//define an array of magicians names
var magician_names = ["harry poter", "mudabbir", "zohan"];
//call make_great functionto modify magician names.
var great_magicians = make_great(magician_names);
//call show magicians that show modified list of magicians.
show_magicians(great_magicians);
