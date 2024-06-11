//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

//creating a Array with 5 values:-
let Usernames = ["*BeEnIsH*","asif","*BaLi SaKiNa*","Admin","chanoo","ayaat"];

//REMOVE all values from our array now our array is empty
Usernames = [] 

//If statement for checking length of our array is empty?
if (Usernames.length === 0){
    console.log("your Array is empty we need to find some user's!");
}else{
    //using forEach loop on Array:-
usernames.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`hello ${oneuser},would you like to see a status report?`);
    }else{
        console.log(`hello ${oneuser},thankyou for logging in again`);
     }
})
}
