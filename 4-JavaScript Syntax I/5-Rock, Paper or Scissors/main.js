/*
 In this project, we’re going to practice conditionals in JavaScript so you can hone your skills and 
 feel confident taking them to the real world. 

 Why? Given a certain input you want to return a certain output. If this than that.
 ------
 Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/

// Validating user choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("You introduced an invalid value.");
    return null;
  }
};

// Determining computer choice
const getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return null;
  }
};

// Determining winner depending on the choices
function determineWinner(userChoice, computerChoice) {
  //cheater option
  if (userChoice === "bomb") {
    return "You won, cheater";
  }
  if (userChoice === computerChoice) {
    return "Tie!";
  }
  if (userChoice === "rock") {
    return computerChoice === "paper" ? "You lost!" : "You won!";
  }

  if (userChoice === "paper") {
    return computerChoice === "rock" ? "You won!" : "You lost!";
  }
  return userChoice === "scissors" ? "You won!" : "You lost!";
}

// main function of the game
function playGame() {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

// call to main function of the game to play
playGame();
