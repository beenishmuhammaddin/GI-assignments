"use strict";
//making a function
function make_shirt(size = "large", printmessage = "i love typescript") {
    console.log(`creating a ${size} shirt with the ${printmessage} prints on shirt`);
}
//calling a function with by default values
make_shirt();
//calling a function now with medium size & default msg.
make_shirt("medium");
//calling a function now with small size & also different msg.
make_shirt("small", "i love javascript");
