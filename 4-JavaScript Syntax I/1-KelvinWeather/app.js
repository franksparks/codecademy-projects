// Forecast of today in kelvin degrees
const kelvin = 293;

// We will convert Kelvin to Celsius.
// We need to substract 273 to the Kelvin value
let celsius = 293 - 273;

// We will convert Celsius to Fahrenheit.
// We need to use this equation:
// Fahrenheit = Celsius * (9/5) + 32

// As we will get a decimal number, we'll call Math.floow() method.
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// // We will convert Celsius to the Newton scale.
// We need to use this equation:
// Newton = Celsius * (33/100)

// As we will get a decimal number, we'll call Math.floow() method.
let newton = Math.floor(celsius * (33 / 100));

console.log(
  `The temperature is ${kelvin} degrees Kelvin, ${celsius} degrees Celsius(${newton} in Newton scale), or ${fahrenheit} degrees Fahrenheit.`
);
