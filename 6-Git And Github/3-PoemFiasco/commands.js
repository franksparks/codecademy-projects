/* Tasks to perform
- Checkout the HEAD version of road-not-taken.txt to discard changes.
- Finish the poem by adding a line to road-not-taken.txt.
- Discard changes in oven-bird.txt using a shortcut command.
- Finish “Oven Bird” by adding a line.
- Check the diff for fire-and-ice.txt and add two lines to the poem.
- Add all three files to the staging area with a single command.
- Remove fire-and-ice.txt from the staging area.
- Make a commit.
- Make drastic changes to each of the three poems.
- Add all three files to the staging area.
- Make a commit.
- Reset the Git project to the commit before the drastic changes.
- Discard changes in the working directory to restore files to the HEAD commit.
*/

// Commands needed

// git checkout HEAD road-not-taken.txt

// changes done in road-not-taken.txt
// git checkout -- oven-bird.txt

// changes done in oven-bird.txt
// changes done in fire-and-ice.txt

// git add road-not-taken.txt oven-bird.txt fire-and-ice.txt
// git reset fire-and-ice.txt
// git commit -m "Add three poems"

// changes done in road-not-taken.txt, oven-bird.txt, fire-and-ice.txt
// git add road-not-taken.txt oven-bird.txt fire-and-ice.txt
// git commit -m "Modified three poems"

// git checkout -- .
