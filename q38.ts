//describe a function.
function describe_city (city : string, country : string = "pakistan"){
    console.log(`${city} is in ${country}`);
}

// calling the fuction
describe_city ("karachi");

describe_city ("lahore");

describe_city ("las vegas",("united states of america"));