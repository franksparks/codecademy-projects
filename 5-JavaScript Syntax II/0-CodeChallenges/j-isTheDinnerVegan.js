/*
Write a function isTheDinnerVegan() that takes in an array of food objects in the format:
{name: 'cabbage', source: 'plant' }

and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.
You can test your function when you’re ready by passing in the dinner array or by making your own!
*/

// Write your code here:
const isTheDinnerVegan = (dinner) =>
  dinner.every((elem) => elem.source === "plant");

// Feel free to comment out the code below to test your function

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));
// Should print false
