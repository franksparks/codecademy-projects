/*
Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'
*/

// Write your function here:

const finalGrade = (numOne, numTwo, numThree) => {
  if (
    numOne < 0 ||
    numOne > 100 ||
    numTwo < 0 ||
    numTwo > 100 ||
    numThree < 0 ||
    numThree > 100
  ) {
    return "You have entered an invalid grade.";
  }
  let average = (numOne + numTwo + numThree) / 3;
  if (average < 60) {
    return "F";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else {
    return "A";
  }
};

// Test code
console.log(finalGrade(99, 92, 95)); // Should print 'A'

console.log(finalGrade(99, 92, -1));
