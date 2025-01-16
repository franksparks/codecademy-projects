/*
Build a virtual Magic Eight Ball using control flow in JavaScript. 
You’ll practice building decision-making into your programs and gain confidence in writing more robust JavaScript code.
 */

// If the user wants, they can enter their name in between the quotation marks.
let userName = "Ferran";

// Ternary expression that decides what to do if the user enters a name or not.
userName ? console.log(`Hello ${userName}`) : console.log("Hello!");

// String that is the question the user wants to ask the Magic Eight Ball.

let userQuestion = "Will I land a job via Codecademy?";
userName
  ? console.log(`${userName} wants to know : ${userQuestion}`)
  : console.log(`User wants to know : ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

//We will save a value to this variable in the next steps, depending on the value of randomNumber.
let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "'It is decidedly so'";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  default:
    break;
}

console.log(eightBall);
