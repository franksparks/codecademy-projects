let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generation of the new secret
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// Determines which guess is closest to the target number
const compareGuesses = (userGuess, computerGuess, secret) => {
  let userPoints = Math.abs(secret - userGuess);
  let computerPoints = Math.abs(secret - computerGuess);
  return userPoints <= computerPoints;
};

// Increases the winner’s score after each round
const updateScore = (winner) => {
  winner === "human" ? humanScore++ : computerScore++;

  console.log(`Human points:${humanScore}`);
  console.log(`Computer points:${computerScore}`);
};

// Updates the round number after each round
const advanceRound = () => currentRoundNumber++;

//Testing
console.log(generateTarget());
console.log(compareGuesses(3, 2, generateTarget()));
