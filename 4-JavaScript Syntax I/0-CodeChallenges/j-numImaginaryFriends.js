/*
A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.

Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.

Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.
*/

// Write your function here:

const numImaginaryFriends = (totalFriendsNum) =>
  Math.ceil(totalFriendsNum * 0.25);

// Test code
console.log(numImaginaryFriends(20)); // Should print 5
console.log(numImaginaryFriends(10)); // Should print 3 (2.5 rounded up!)
console.log(numImaginaryFriends(5)); // Should print 2
console.log(numImaginaryFriends(2)); // Should print 1
