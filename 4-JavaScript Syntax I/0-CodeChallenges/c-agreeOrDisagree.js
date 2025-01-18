/*
Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.
*/

// Write your function here:
const agreeOrDisagree = (stringOne, stringTwo) => {
  return stringOne === stringTwo ? "You agree!" : "You disagree!";
};

// Test code:

console.log(agreeOrDisagree("one", "two"));
console.log(agreeOrDisagree("one", "one"));
console.log(agreeOrDisagree("yep", "yep"));
