/*
Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method,
 returns an array with the items that are present in both arrays.

You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!
*/

// Write your code here:
const justCoolStuff = (coolStuff, myStuff) => {
  return coolStuff.filter((word) => myStuff.includes(word));
};

// Feel free to uncomment the code below to test your function

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
