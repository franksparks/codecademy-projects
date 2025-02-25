/*
Goals of the challenge:
Validate Credit Card Numbers: Implement a function to determine if a credit card number is valid using the Luhn algorithm.
Identify Invalid Cards: Create a function to find and return invalid credit card numbers from a list.
Identify Issuing Companies: Develop a function to identify which credit card companies have issued invalid numbers, based on the first digit of the card number.
Optimize Verification Process: Use functions and loops to automate the validation process, making it more efficient than manual checking.
Explore Extensions: Optionally, test the functions with different credit card numbers, convert strings to arrays, and create a function to correct invalid numbers.
*/

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

const validateCred = (arr) => {
  let sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let currentValue = arr[i];

    if ((arr.length - 1 - i) % 2 === 1) {
      currentValue *= 2;
      currentValue > 9 ? (currentValue -= 9) : currentValue;
    }
    sum += currentValue;
  }
  return sum % 10 === 0;
};

console.log(validateCred(valid1)); // Should print true
console.log(validateCred(valid2)); // Should print true
console.log(validateCred(invalid1)); // Should print false

const findInvalidCards = (cards) => {
  let invalidCards = [];
  for (let i = 0; i < cards.length; i++) {
    let currentCard = cards[i];
    if (!validateCred(currentCard)) {
      invalidCards.push(currentCard);
    }
  }
  return invalidCards;
};
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5])); // Shouldn't print anything
console.log(findInvalidCards(batch)); // Should print all of the invalid numbers

const idInvalidCardCompanies = (invalidCards) => {
  let companies = [];
  for (let i = 0; i < invalidCards.length; i++) {
    switch (invalidCards[i][0]) {
      case 3:
        if (companies.indexOf("Amex") === -1) {
          companies.push("Amex");
        }
        break;
      case 4:
        if (companies.indexOf("Visa") === -1) {
          companies.push("Visa");
        }
        break;
      case 5:
        if (companies.indexOf("Mastercard") === -1) {
          companies.push("Mastercard");
        }
        break;
      case 6:
        if (companies.indexOf("Discover") === -1) {
          companies.push("Discover");
        }
        break;
      default:
        console.log("Company not found");
    }
  }
  return companies;
};

console.log(idInvalidCardCompanies(batch)); // Should print 4 companies
