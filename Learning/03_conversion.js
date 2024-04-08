
// imagine you got this below score as a string from your frontend. 
let score = "50abc"; 

// get the type => string.
console.log(typeof score);

// convert the string to a number. 
let valueInNumber = Number(score);

// get the type => number. 
// but did it convert abc also to number ? it shouldn't convert. 
console.log(typeof valueInNumber);

// print what's stored in the variable => NaN.
console.log(valueInNumber);

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
/*
    any number => true, 0 => false 
    "" => false 
    "name" => true
*/

let someNumber = 33
let strNumber = String(someNumber)
console.log(typeof strNumber);
console.log(strNumber);

// conversions. 

// "33" => 33
// "33abc" => NaN 
// true => 1 || false => 0
// undefined => NaN
// null => 0
