
// SCOPE. 

/* 
Variables defined inside a function cannot be accessed from anywhere outside the function, 
because the variable is defined only in the scope of the function. However, 
a function can access all variables and functions defined inside the scope in which it is defined.

In other words, a function defined in the global scope can access all variables defined 
in the global scope. A function defined inside another function can also access all 
variables defined in its parent function, and any other variables to
 which the parent function has access.
*/

// The following variables are defined in the global scope
const num1 = 20; // global variable.
const num2 = 3; // global variable. 

// This function is defined in the global scope
function namecall() {
    const name = "Chamakh"; // name declared in block scope.
    return name;
}

console.log(namecall());

// A nested function example
function display() {
    
    const total = num1 + num2 // has access to global variables. 

  function name1() {
    return ` scored ${total}`; // name can't access name variable which is declared in block scope of a function. 
  }

  return name1();
}

console.log(display()); // error.


// HOISTING. 

/* 

functions can be declared in two types. 
    1. function declaration
    2. funcstion expression
*/

// 1. function declaration. - This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope

console.log(addOne());

function addOne() {
    return 2 + 3; 
}

// 2. function expression. - here function hoising is not possible. hence, error occurs. 

console.log(addTwo(3));

const addTwo = function(num) {
    return num + 3; 
}
