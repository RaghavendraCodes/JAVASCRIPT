"use strict"; // this treats all JS code as the newer version. 

// alert("hello"); since we are using node.js environment this doesnt work. 

// code working alone doesn't make it the best. but, the readability of that code also matters a lot. 

// JavaScript is a dynamically typed language. so there is no type safety in js hence ts was developed to cope up with this problem. 

// data types. 

/*

    PRIMITIVE TYPE. 
        1. String. 
        2. Number
        3. Boolean 
        4. null
        5. undefined
        6. Symbol 
        7. BigInt 

    REFERENCE / NON-PRIMITIVE TYPE. 
        1. Arrays 
        2. Objects
        3. Functions 

*/

let name = "raghavendra" // string
let age = 20 // int 
let isLogged = false // boolean 
let state = null // null => standalone value. 
let random; // undefined => the variables are not initialized only declared.
const id = Symbol('123') // symbol => unique.  

console.log(typeof state);
console.log(typeof random);

// array. 
const heros = ["saktiman", "naagraj", "doga"]; 

// objects. nested objects are also possible.
const myName = {
    myname: "raghavendra", 
    age: 20,
    subjects : {
        sub1: "DS",
        sub2: "OOJ"
    }
}

console.log(myName.subjects);

/* *************** ( MEMORY ALLOCATION OF DATA TYPES ) ***************** */

// Stack (Primitive) 
/* 
    whenever u refer primitive datatype variable. 
    a copy of that variable is refered.
    hence, there wont be any changes done in the 
    actual variable when changed the new reference variable. 
*/

let myYoutubeName = "raghavendraCodes"
let anotherName = myYoutubeName; // reference to a copy of the variable. 
console.log("before :", anotherName);
anotherName = "code with raghu"
console.log("after : ", anotherName);
console.log("main : ", myYoutubeName);

// Heap (Non-primitive)
/*
    when u refer a non-primitive datatype. 
    the actual variable or data stored in the heap memory will be 
    refered and changes made in new reference variable also affects the
     original existing variable.  
*/

let userOne = {
    email: "user1@gmail.com", 
    upi: "123@ybl"
}

let userTwo = userOne // reference variable referring userOne original object. 

userTwo.email = "user2.gmail.com" // changes will affect userOne object. 

console.log(userOne);
console.log(userTwo);