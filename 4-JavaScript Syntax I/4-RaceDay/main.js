/*
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like the image provided

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
*/

let raceNumber = Math.floor(Math.random() * 1000);

//runner registered early or not
let registeredEarly = true;

let runnerAge = 18;
if (runnerAge > 18) {
  if (registeredEarly) {
    raceNumber += 1000;
    console.log(
      `You will race at 09.30 AM. Your race number is: ${raceNumber}.`
    );
  } else {
    console.log(
      `You will race at 11:30 AM. Your race number is: ${raceNumber}.`
    );
  }
} else if (runnerAge === 18) {
  console.log(
    `Please go to the registration desk. Your race number is ${raceNumber}.`
  );
} else {
  console.log(
    `Youth registrants run at 12:30 pm. Your race number is ${raceNumber}.`
  );
}
