//define a function with a rest parameterthat accept items arguments representing our sandwich:-

function makesandwich(...items: string[]){
    console.log("\nmaking a sandwich with the following items:");

    items.forEach(singleitem => console.log("-" + singleitem));

    console.log("now enjoy sandwich");
}

//call the function 3 items with 3 diff num of arguments:-
makesandwich("chicken","cheese","mayo","egg");

makesandwich("bread","butter");

makesandwich("bread","butter","mayo","egg","cheese","chicken","lettuce","tomato");
