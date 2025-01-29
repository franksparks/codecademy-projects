/*
Tasks of the project
- Create a function named keyPlay to change the background color of keys when pressed.
- Create a function named keyReturn to reset the background color of keys when released.
- Create a named function to assign events to keys, taking one parameter note.
- Inside the function, create an event handler for mousedown to run keyPlay.
- Inside the function, create an event handler for mouseup to run keyReturn.
- Use a .forEach loop to pass elements in the notes array through the event assignment function.
- Run the code to test the piano key events.
- Create a click event handler for the nextOne button.
- Modify the song box by revealing nextTwo and hiding nextOne when clicked.
- Change musical notes when nextOne is clicked.
- Create a click event handler for the nextTwo button.
- Reveal nextThree and hide nextTwo when nextTwo is clicked.
- Change lyrics when nextTwo is clicked.
- Change the display of lastLyric to 'inline-block' when nextTwo is clicked.
- Change musical notes when nextTwo is clicked.
- Create a click event handler for the nextThree button.
- Reveal startOver and hide nextThree when nextThree is clicked.
- Change lyrics when nextThree is clicked.
- Change musical notes when nextThree is clicked.
- Change the display of lastLyric back to 'none' when nextThree is clicked.
- Complete the Piano Player and test all events.
*/

// The keys and notes variables store the piano keys
const keys = [
  "c-key",
  "d-key",
  "e-key",
  "f-key",
  "g-key",
  "a-key",
  "b-key",
  "high-c-key",
  "c-sharp-key",
  "d-sharp-key",
  "f-sharp-key",
  "g-sharp-key",
  "a-sharp-key",
];

const notes = [];

keys.forEach(function (key) {
  notes.push(document.getElementById(key));
});

// Write named functions that change the color of the keys below
function keyPlay(event) {
  event.target.style.backgroundColor = "blue";
}

// Write a named function with event handler properties
function keyReturn(event) {
  event.target.style.backgroundColor = "";
}

// Write a loop that runs the array elements through the function
notes.forEach(function (note) {
  note.onmousedown = function () {
    keyPlay(event);
  };
  note.onmouseup = function () {
    keyReturn(event);
  };
});

notes.forEach(function (note) {
  note.addEventListener("mousedown", keyPlay);
  note.addEventListener("mouseup", keyReturn);
});

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById("first-next-line");
let nextTwo = document.getElementById("second-next-line");
let nextThree = document.getElementById("third-next-line");
let startOver = document.getElementById("fourth-next-line");

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById("column-optional");

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function () {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById("letter-note-five").innerHTML = "D";
  document.getElementById("letter-note-six").innerHTML = "C";
};

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function () {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById("word-five").innerHTML = "DEAR";
  document.getElementById("word-six").innerHTML = "FRI-";
  lastLyric.style.display = "inline-block";
  document.getElementById("letter-note-three").innerHTML = "G";
  document.getElementById("letter-note-four").innerHTML = "E";
  document.getElementById("letter-note-five").innerHTML = "C";
  document.getElementById("letter-note-six").innerHTML = "B";
};

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function () {
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById("word-one").innerHTML = "HAP-";
  document.getElementById("word-two").innerHTML = "PY";
  document.getElementById("word-three").innerHTML = "BIRTH";
  document.getElementById("word-four").innerHTML = "DAY";
  document.getElementById("word-five").innerHTML = "TO";
  document.getElementById("word-six").innerHTML = "YOU";
  document.getElementById("letter-note-one").innerHTML = "F";
  document.getElementById("letter-note-two").innerHTML = "F";
  document.getElementById("letter-note-three").innerHTML = "E";
  document.getElementById("letter-note-four").innerHTML = "C";
  document.getElementById("letter-note-five").innerHTML = "D";
  document.getElementById("letter-note-six").innerHTML = "C";
  lastLyric.style.display = "none";
};

// This is the event handler property and function for the startOver button
startOver.onclick = function () {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById("word-one").innerHTML = "HAP-";
  document.getElementById("letter-note-one").innerHTML = "G";
  document.getElementById("word-two").innerHTML = "PY";
  document.getElementById("letter-note-two").innerHTML = "G";
  document.getElementById("word-three").innerHTML = "BIRTH-";
  document.getElementById("letter-note-three").innerHTML = "A";
  document.getElementById("word-four").innerHTML = "DAY";
  document.getElementById("letter-note-four").innerHTML = "G";
  document.getElementById("word-five").innerHTML = "TO";
  document.getElementById("letter-note-five").innerHTML = "C";
  document.getElementById("word-six").innerHTML = "YOU!";
  document.getElementById("letter-note-six").innerHTML = "B";
};
