"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_Shirt(size, text) {
    console.log(`\n your shirt size is ${size} printed ${text}`);
}
make_Shirt(`large, i love you type script`);
make_Shirt(`medium, I love my life`);
make_Shirt(`extra largr, I love you mom`);
// Task 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country) {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi");
describe_city("Kashmore");
// Task 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function describe_city(city, country) {
    console.log(`${city} is in ${country}`);
}
describe_city(`Karachi`, `Pakistan`);
describe_city(`france`, `England`);
describe_city(`Riyadh`, `Saudia`);
