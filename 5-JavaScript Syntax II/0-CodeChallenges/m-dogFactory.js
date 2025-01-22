/*
Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }

Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.

*/

// Write your code here:

const dogFactory = (name, breed, weight) => {
  if (
    typeof name !== "string" ||
    typeof breed !== "string" ||
    typeof weight !== "number"
  ) {
    return "Values introduced do not respect the expected format";
  } else {
    console.log("Data introduced is ok.");
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
        return this._name;
      },
      get breed() {
        return this._breed;
      },
      get weight() {
        return this._weight;
      },
      set name(newName) {
        this._name = newName;
      },
      set breed(newBreed) {
        this._breed = newBreed;
      },
      set weight(newWeight) {
        this._weight = newWeight;
      },
      bark() {
        return "ruff! ruff!";
      },
      eatTooManyTreats() {
        this._weight++;
      },
    };
  }
};
console.log(dogFactory("Mozart", "West Highland White Terrier", 20));
console.log(dogFactory(1, "breed", 3));
console.log(dogFactory("name", 2, 3));
console.log(dogFactory("name", "breed", "weight"));
