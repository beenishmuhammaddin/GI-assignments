//define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define an array containig magicians name
var magician_name = ["harry poter", "mudabbir", "zohan"];
//calling the function to print each magician name
show_magicians(magician_name);
