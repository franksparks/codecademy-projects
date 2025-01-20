/*
Using array methods, you will transform an array of strings into a secret message!


*/

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

console.log(secretMessage);
console.log(secretMessage.length);
// Remove the last string of the array
secretMessage.pop();

console.log(secretMessage);
console.log(secretMessage.length);

// Add the words 'to' and 'Program' as separate strings to the end of the array.
secretMessage.push("to", "Program");

console.log(secretMessage);
console.log(secretMessage.length);

// Change the word 'easily' to the word 'right' by accessing the index and replacing it.
secretMessage[7] = "right";

console.log(secretMessage);
console.log(secretMessage.length);

// Use an array method to remove the first string of the array.
secretMessage.shift();

console.log(secretMessage);
console.log(secretMessage.length);

// Use an array method to add the string 'Programming' to the beginning of the array.
secretMessage.unshift("Programming");

console.log(secretMessage);
console.log(secretMessage.length);

// Use an array method to remove the strings 'get', 'right', 'the', 'first', 'time,', and replace them with the single string 'know,'.
secretMessage.splice(6, 5, "know,");

console.log(secretMessage);
console.log(secretMessage.length);

// On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(" "));
