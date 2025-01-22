/*
In this project, you’ll use what you know about iterating over arrays to 
gather information and improve the quality of a paragraph.

Here is a summary of all the tasks in the project:
1. Getting Started: Log the `storyWords` array to the console
2. View Edited Story: Use the `.join()` method to convert `storyWords` back into a string and log it to the console.
3. Counting Words: Create a `count` variable and use `.forEach()` to iterate over `storyWords`, incrementing `count` for each word.
4. Log Word Count: Add a parameter to the `.forEach()` callback to increment `count` and log the total word count.
5. Filter Unnecessary Words: Use `.filter()` to remove the word "literally" from `storyWords`.
6. Remove Unnecessary Word: Ensure the `filter()` method removes the `unnecessaryWord` from the story.
7. Replace Misspelled Words: Use `.map()` to correct the misspelled word "beautifull" to "beautiful".
8. Find Bad Word Index: Use `.findIndex()` to locate the index of the `badWord` in `storyWords`.
9. Replace Bad Word: Replace the bad word at the found index with "really".
10.Check Word Length: Use `.every()` to check if all words in `storyWords` are 10 characters or less.
11.Find Long Word**: Use an iterator to find and replace the word longer than 10 characters in the original `story`.
 */

let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

console.log(storyWords);
storyWords = storyWords.join(" ");
console.log(storyWords);
storyWords = story.split(" ");

let count = 0;
storyWords.forEach((word) => count++);
console.log(count);

let betterWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});
console.log(betterWords);

let correctWords = betterWords.map((word) => {
  return word === misspelledWord ? "beautiful" : word;
});

console.log(correctWords);

let badWordIndex = correctWords.findIndex((word) => word === badWord);
console.log(badWordIndex);

correctWords[badWordIndex] = "really";
badWordIndex = correctWords.findIndex((word) => word === badWord);
badWordIndex === -1
  ? console.log("Bad word not found")
  : console.log("Bad word found");

let longWord = correctWords.every((word) => word.length > 10);
longWord
  ? console.log("All words are longer than 10 characters")
  : console.log("Not all words are longer than 10 characters");

let longWordIndex = correctWords.findIndex((word) => word.length > 10);
correctWords[longWordIndex] = "stunning";
console.log(correctWords);
