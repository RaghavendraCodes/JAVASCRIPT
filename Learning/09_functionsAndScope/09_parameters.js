/* **************************************************************** */

// objects passed as parameters. 

/* 

When you pass an object as a parameter, if the function changes 
the object's properties, that change is visible outside the function, 
as shown in the following example:

*/

function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); // before  - "Honda"
  myFunc(mycar);
  console.log(mycar.make); // after - "Toyota" 

/* 

// arrays passed as parameters.

When you pass an array as a parameter, 
if the function changes any of the array's values, 
that change is visible outside the function, as shown in the following example:

*/

function myFunc(theArr) {
    theArr[0] = 30;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30


// functions can be anonymous without name. 

const square = function (number) {
    return number * number;
  };
  
  console.log(square(4)); // 16
  

// functions can accept other functions as parameter.

function cube(f, a) {
    const result = new Array(a.length)
    for (let index = 0; index < a.length; index++) {
        result[index] = f(a[index])
    }
    return result; 
}

const returnsCube = function (x) {
    return x*x*x; 
}

const numbers = [0,1,2,3,4,5]
console.log(cube(returnsCube, numbers));


// function can call itself. eg : factorial of a number. 

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }