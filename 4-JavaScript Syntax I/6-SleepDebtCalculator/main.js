/* 
In this project, we’re going to practice functions in JavaScript so you can hone your skills and 
feel confident taking them to the real world. 

Why? Functions help us build separation of concerns so our code isn’t one long function.

-----

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

// Setting the amount oh hours slept by day
let getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 7;
    case "wednesday":
      return 6;
    case "thursday":
      return 5;
    case "friday":
      return 4;
    case "saturday":
      return 3;
    case "sunday":
      return 2;
    default:
      return 0;
  }
};

// Calculate the total amount of sleep hours per week
let getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

// Set the ideal amount of hours of sleep by week
let getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

let calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You sleep exactly the time expected.");
  } else if (actualSleepHours > idealSleepHours) {
    let hours = actualSleepHours - idealSleepHours;
    console.log(`You sleep ${hours} hours more than expected.`);
  } else {
    let hours = idealSleepHours - actualSleepHours;
    console.log(`You sleep ${hours} hours less than expected.`);
  }
};

calculateSleepDebt();
