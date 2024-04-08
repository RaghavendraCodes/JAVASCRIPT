
/* *************** ( ARRAYS ) ***************** */

// declararion type 1 :
const myArray = [0, 1, 2, 3, 4, 5]
//console.log(myArray);

/* when refered it creates a shallow copy. 
i.e, referenced the original array and changes made affects original array also. */

// declaration type 2 :
const myArray2 = new Array(1,2,3,4,5)
//console.log(myArray2);

// you get a bunch of prototype methods for arrays also as like strings. 

// array methods. 

// pushes value to the array. 
myArray.push(6)

// removes the last element from the array. 
myArray.pop()

// unshift - adds value to the front of the array. 
myArray.unshift(9)

// shift - removes value from the front. 
myArray.shift()

// converts to string. 
const newArr = myArray.join()

// slice and splice difference. 

/* slice - the reference variable is refered to the deep copy of the original array. 
hence there is no change in original one when sliced new referece array. */
console.log("A : ", myArray);
const myn1 = myArray.slice(1,4); 
console.log("slice : ", myn1);
console.log("B :", myArray);


/* splice - the reference variable is refered to the shallow copy of the original array. 
hence there is change in original one when spliced new referece array. */
console.log("C: ", myArray);
const myn2 = myArray.splice(1,4); 
console.log("splice : ", myn2);
console.log("D :", myArray);

const marvel_heroes = ['Ironman', 'thor', 'spiderman']
const dc = ['batman', 'superman', 'flash']

// push doesn't merge two arrays. it pushes the whole array. 
marvel_heroes.push(dc)
console.log(marvel_heroes);

// concat merges two arrays but returns a new array without changing anything in existing array. 
const newHeros = marvel_heroes.concat(dc)
console.log(marvel_heroes);
console.log(newHeros);

// spread operator - most standard and widely used in code bases. 
const allNewHeros = [...marvel_heroes, ...dc]
console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7, [4,5]]]

// returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(2);
console.log(real_another_array);

// from method - converts anything to array. 
console.log(Array.from("raghavendra"));

// intersting 
console.log(Array.from({name: "raghavendra"}));

// of method - converts list of values to combine and form a new array. 
let score1 = 100 
let score2 = 200
let score3 = 300 
console.log(Array.of(score1, score2, score3));

for(let i=0; i<dc.length; i++) {
    marvel_heroes.push(dc[i]);
}

console.log(marvel_heroes);