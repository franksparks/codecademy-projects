/*
We wrote a function, smallestPowerOfTwo(), which should take in an array and return the 
lowest power of 2 that is greater than or equal to each number in that array. 
A power of two is any value 2n where n is a non-negative integer (including 0). 
The list of powers of 2 for non-negative integers starts with [1, 2, 4, 8, 16, 32, 64,...] where 20=1, 21=2, 22=4, and so on.

Within our smallestPowerOfTwo() function, we create a new array called results. 
We then loop through the argument array and calculate the smallest power of two which is greater than or equal to the 
current element before using .push() to add it to results.

It’s not doing what we want. Can you fix our code, please?
*/
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  let results = [];
  let j = 0;
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    j = 1;
    while (j < number) {
      j = j * 2;
    }
    results.push(j);
  }
  return results;
};

console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

//Note: Original code was not declaring j variable and using i on both loops.
