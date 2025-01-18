/*
It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.
*/

// Write your function here:

const truthyOrFalsy = (value) => (value ? true : false);

// Test code
console.log(truthyOrFalsy(0));
console.log(truthyOrFalsy(1));
console.log(truthyOrFalsy("hi"));
console.log(truthyOrFalsy(false));
console.log(truthyOrFalsy(""));
