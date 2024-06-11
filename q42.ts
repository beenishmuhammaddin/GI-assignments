//define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//function to make magicians gr8 through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `the great ${name}`);
}

//define an array of magicians names
let magician_names = ["harry poter","mudabbir","zohan"];

//call make_great functionto modify magician names.
let great_magicians = make_great(magician_names);

//call show magicians that show modified list of magicians.
show_magicians(great_magicians);



