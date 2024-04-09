
/* *************** (FUNCTIONS ) ***************** */

/* 

FUNCTIONS - 

Functions are one of the fundamental building blocks in JavaScript.

A function in JavaScript is similar to a procedure — a set of statements
that performs a task or calculates a value, but for a procedure to qualify
as a function, it should take some input and return an output where there
is some obvious relationship between the input and the output. 
To use a function, you must define it somewhere in the scope 
from which you wish to call it.

*/

// defining functions. 

/*

1.  The name of the function.
2.  A list of parameters to the function,
    in parentheses and separated by commas.
3.  The JavaScript statements that define the function, 
    enclosed in curly braces, {  }.

*/

// non parameterized function. 
function call() {
    console.log("hello! welcome back");
}

call(); // calling the function.

// parameterized function. 
function greetings(name) { // name = parameter. 
    console.log(`welcome back! good morning ${name}`);
}

greetings("Raghavendra R"); // the value which you pass is called as argument. 

// return statement in function. 
function add(x, y) { 
    console.log("Sum : ", x + y);
}

/* the above function is not returning anything. 
hence, there is no value stored in add(2,3) function call 
which can initialize result variable. since, result variable 
is declared and not intialized. undefined is printed. */

const result = add(2,3); 
console.log("result : ", result);

// function with return statement. 
function addWithReturn(x,y) {
    const sum = x + y; 
    return sum
    // another way to return. 
    // return x + y; // this also works.
}

const result2 = addWithReturn(2,5); 
console.log(result2);

