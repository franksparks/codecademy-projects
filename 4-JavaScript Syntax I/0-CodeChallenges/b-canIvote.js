/*
The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.
*/

// Write your function here:
const canIVote = (age) => {
  return age >= 18 ? true : false;
};

// Test code:
console.log(canIVote(8));
console.log(canIVote(18));
console.log(canIVote(19));
console.log(canIVote(218));
