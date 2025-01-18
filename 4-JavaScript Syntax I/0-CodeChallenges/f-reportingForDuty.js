/*
Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’*/

// Write your function here:

const reportingForDuty = (rank, lastName) =>
  `${rank} ${lastName} reporting for duty!`;

// Test code
console.log(reportingForDuty("Private", "Fido"));
console.log(reportingForDuty("Sergeant", "Doe"));
