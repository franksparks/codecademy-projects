/* Tasks to perform
- Discard changes in the working directory for portrait.txt.
- Add eyebrows to the portrait in portrait.txt and save the file.
- Add the file to the staging area.
- Make a commit.
- Change the completion dates on every file and save each change.
- Add all changes to the staging area with a single command.
- Make a commit.
- Add your “artist name” to each file and save each change.
- Use a shortcut to add every file in the working directory to the staging area.
- Reset the staging area to remove house.txt.
- Make a commit.
*/

// Commands needed

// git checkout -- portrait.txt
// changes done in portrait.txt
// git add portrait.txt
// git commit -m "Add eyebrows to the portrait"

// changes done in portrait.txt, completion-dates.txt, artist-names.txt
// git add portrait.txt completion-dates.txt artist-names.txt
// git commit -m "Change completion dates"

// changes done in portrait.txt, completion-dates.txt, artist-names.txt
// git add .

// git reset house.txt
// git commit -m "Remove house.txt"
