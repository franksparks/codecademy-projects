/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:
    'You will be [calculated age] in the year [year passed in]'

If the year is before they were born, you should return a string in the following format:
    'The year [year passed in] was [calculated number of years] years before you were born'

If the year is in the past but not before the person was born, you should return a string in the following format:
    'You were [calculated age] in the year [year passed in]'
*/

// Write your function here:

const howOld = (age, year) => {
  let calcAge = year - 2025 + age;
  let calcNumberOfYears = 2025 - year - age;
  if (year > 2025) {
    return `You will be ${calcAge} in the year ${year}`;
  }
  if (year < 2025 - age) {
    return `The year ${year} was ${calcNumberOfYears} years before you were born`;
  } else {
    return `You were ${calcAge} in the year ${year}`;
  }
};

// Test code
console.log(howOld(37, 2053));
console.log(howOld(37, 2050));
console.log(howOld(37, 2040));
console.log(howOld(37, 1988));
console.log(howOld(37, 2000));
