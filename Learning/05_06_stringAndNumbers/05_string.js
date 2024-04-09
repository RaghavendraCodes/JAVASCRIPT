
/* *************** ( STRINGS ) ***************** */

const name = "raghavendra"
const repoCount = "10"

// console.log(name + repoCount); shouldn't use this. 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const game = new String("road-rash")

console.log(game.length);

console.log(game.toUpperCase());

/* few important prototypes or functions to use. */

// substring won't take negative values
const newString = game.substring(0,3).toUpperCase();
console.log(newString);

// slice takes negative values and prints the string in reverse.
const another = game.slice(-9,3); 
console.log(another);

// trim method
const newOne = "  raghavendra  "
console.log(newOne);
console.log(newOne.trim());

// replace method
const url = "https://raghavendra.com/raghavendra%20codes";
console.log(url.replace("%20", "-"))

// includes method
console.log(url.includes('.com'))

// split method
console.log(game.split('-'));