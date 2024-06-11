//define a function with a rest parameterthat accept items arguments representing our sandwich:-
function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking a sandwich with the following items:");
    items.forEach(function (singleitem) { return console.log("-" + singleitem); });
    console.log("now enjoy sandwich");
}
//call the function 3 items with 3 diff num of arguments:-
makesandwich("chicken", "cheese", "mayo", "egg");
makesandwich("bread", "butter");
makesandwich("bread", "butter", "mayo", "egg", "cheese", "chicken", "lettuce", "tomato");
