//creating a function with parameters which return a values in string.
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
//calling a function and print the return value.
console.log(city_country("karachi", "pakistan"));
console.log(city_country("tokyo", "japan"));
console.log(city_country("las vegas", "usa"));
