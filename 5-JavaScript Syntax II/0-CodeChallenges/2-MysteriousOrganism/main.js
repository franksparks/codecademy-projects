/*
Project Goals
Context: You’re part of a research team that has found a new mysterious organism at the bottom of
 the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds 
 that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to 
 the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive 
 above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create 
 objects that simulate the DNA of P. aequor for your research team to study.

As you progress through the steps, use the terminal and console.log() statements to check the output of your 
loops and functions.

The goals of the “Mysterious Organism” challenge are:

- Simulate DNA: Create objects to simulate the DNA of a mysterious organism, P. aequor, using JavaScript.
- Factory Function: Implement a factory function to generate multiple organism objects, each with unique DNA sequences.
- Mutate DNA: Add functionality to simulate DNA mutation, reflecting the organism’s high mutation rate.
- Compare DNA: Develop a method to compare DNA sequences between organisms and determine the percentage of similarity.
- Survival Likelihood: Implement a method to assess the likelihood of an organism’s survival based on its DNA composition.
- Create Survivors: Generate multiple instances of organisms that are likely to survive in their natural environment.
*/

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Add your functions below:

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          count++;
        }
      }
      const percentage = (count / this.dna.length) * 100;
      console.log(
        `Specimen ${this.specimenNum} and specimen ${
          pAequor.specimenNum
        } have ${percentage.toFixed(2)}% DNA in common.`
      );
    },
    willLikeSurvive() {
      const cOrG = this.dna.filter(
        (el) => el === "C" || el === "G"
      ).length;
      return cOrG / this.dna.length;
    },
  };
};

console.log(pAequorFactory(1, mockUpStrand()));
