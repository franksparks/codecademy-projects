/*
In this project, we’re going to practice variables and strings in JavaScript so you can hone 
your skills and feel confident taking them to the real world. Why? 
These concepts will help you use your data to output information to your users.
*/

// This is my (current) age
let myAge = 36;

let earlyYears = 2;
earlyYears *= 10.5;

// Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2;

// Calculate the number of dog years accounted for by your later years.
laterYears *= 4;

// My age in dog years

let myAgeInDogYears = earlyYears + laterYears;

// The toLowerCase method returns a string with all lowercase letters.
let myName = "Ferran".toLowerCase();

// console.log statement that displays your name and age in dog years
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
