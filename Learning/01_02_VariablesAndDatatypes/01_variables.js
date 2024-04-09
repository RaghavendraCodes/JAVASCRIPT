
// const variables can't be changed. 
const accountId = 12345; 

// let variables can be changed.
let accountEmail = "raghu1234@gmail.com";

// var variables can be changed. (not recommended.)
var accPassword = "12345"; 

// u can declare like this also. (not recommended.) 
accountCity = "Jaipur";

// returns undefined since nothing is assigned to the variable.
let accountState; 

/*
prefer not to use var because of issue in block scope and functional scope.
(will cover this in later sections) 
*/

console.log(accountId, accountEmail, accPassword, accountCity, accountState);