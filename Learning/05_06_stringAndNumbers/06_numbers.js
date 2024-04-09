
/* *************** ( NUMBERS AND MATHS ) ***************** */

/* NUMBERS */
const balance = 100; 
console.log(balance);

const newBalance = new Number(100);
console.log(newBalance);

// converts number to string and this enables many other string methods. 
console.log(newBalance.toString().length);

// precises the number to the given decimal. 
console.log(newBalance.toFixed(2));
const otherBalance = 1123.1221
console.log(otherBalance.toPrecision(4));

// add comma's to make it a easy read number. 
const hundreds = 1000000; 
console.log(hundreds.toLocaleString('en-IN')); // 1000000 => 10,00,000

/* MATHS */

console.log(Math.abs(-4));
console.log(Math.round(1.33));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.6));
console.log(Math.min(3,4,5,6));
console.log(Math.max(4,5,6,7));

// most used method -- random()
let ranNum = Math.random()*100+1;
console.log(Math.floor(ranNum));

// u can also fix the range of the random number to be generated. 
const min = 10 
const max = 11
console.log(Math.floor(Math.random() * (max - min + 1) + min));

