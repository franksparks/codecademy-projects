/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
- ‘bad’ should return a 5% tip
- ‘ok’ should return a 15% tip
- ‘good’ should return a 20% tip
- ‘excellent’ should return a 30% tip
- all other inputs should default to 18%
*/

// Write your function here:
const tipCalculator = (quality, total) => {
  switch (quality) {
    case "bad":
      return (total *= 0.05);

    case "ok":
      return (total *= 0.15);

    case "good":
      return (total *= 0.2);

    case "excellent":
      return (total *= 0.3);

    default:
      return (total *= 0.18);
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator("good", 100)); //should return 20
console.log(tipCalculator("bad", 100)); //should return 5
console.log(tipCalculator("ok", 100)); //should return 15
console.log(tipCalculator("excellent", 100)); //should return 30
console.log(tipCalculator("meh", 100)); //should return 18
