// singleton 



// object literals - object consist of a key - value pair. 

const mySym = Symbol("key1"); 

const JsUser = {  // non-singleton object. 
    name: "raghavendra", 
    "full name": "Raghavendra R",
    [mySym]: "",
    age: 20, 
    location: "bengaluru", 
    email: "raghu@gmail.com", 
    isLoggedIn: false, 
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["lastLoginDays"][0]);
console.log(typeof JsUser[mySym]);

// to access such strings this type of accessing is used.
console.log(JsUser["full name"]);

// freeze() - freezes the object and u can not change the object data. 
//Object.freeze(JsUser)
JsUser.email = "raghu@google.com"
console.log(JsUser);

// functions in objects. 
JsUser.greeting = function() {
    console.log(`Hello! JS user ${this.name}`);
}

console.log(JsUser.greeting());

// some more info about objects. 

// one more way to create object. 
const newUser = new Object(); // singleton object. 

const tinderUser = {}; 

tinderUser.id = "123abc"
tinderUser.name = "raghu"
tinderUser.isLoggedIn = false

// nested objects. 
const regularUser = {
    email: "user@gmail.com", 
    fullname: {
        userfullname: {
            firstname: "Raghavendra", 
            lastname: "R"
        }
    }
}

console.log(regularUser.fullname?.userfullname);

// merging two objects. 
const obj1 = {
    1: "a", 
    2: "b"
}

const obj2 = {
    3: "c", 
    4: "d"
}

// method 1. 
const obj3 = {obj1, obj2}
console.log(obj3);

// method 2. 
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

// method 3. 
const obj5 = {...obj1, ...obj2}
console.log(obj5);

// values from database in form of object. 

const users = [
    {
        id: 1, 
        email: "a@gmail.com", 
    }, 
    {
        id: 2, 
        email: "b@gmail.com" 
    }, 
    {
        id: 3, 
        email: "c@gmail.com"
    }
]

// method 1 to access objects which are inside the array. 
users.map((user) => {
    console.log(user);
})

// gets all the keys/values/entries of the mentioned object and spreads it in an array. 
// return type is an array.
console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));
console.log(Object.entries(JsUser));

// you can check if there exists any value which u want. 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// destructuring the objects. 
const course = {
    coursename: "javascripttt", 
    price: "999", 
    courseInstructor: "raghavendra"
}

// destructuring. 
const {courseInstructor: CI} = course
console.log(CI);