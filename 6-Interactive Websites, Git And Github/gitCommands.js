// Useful git commands

// git init -> initializes a git repository
// git status -> shows the status of the repository
// git clone RepoURL -> clones the repo to your local machine

// git checkout -b branchName -> creates a new branch and switches to it
// git branch -> shows the current branch
// git branch branchName -> creates a new branch

// git add . -> stages all changes
// git add fileName -> stages a specific file

// git commit -m "message" -> commits changes and adds a message
// git log -> shows the commit history
// git checkout branchName -> switches to a different branch

// git merge branchName -> merges the branch with the main branch
// git branch -d branchName -> deletes the branch

// git pull origin branchName -> pulls changes from the main branch
// git push origin branchName -> pushes changes to the main branch
// git push origin --delete branchName -> deletes a branch from the remote repository

// git remote -v -> shows the remote repository
// git remote add origin RepoURL -> adds a remote repository
// git remote remove origin -> removes the remote repository

// git config --global user.name "Your Name" -> sets the username
// git config --global user.email "Your Email" -> sets the email
// git config --global --list -> shows the global configuration
// git config --list -> shows the local configuration
// git config --global --unset user.name -> removes the username
// git config --global --unset user.email -> removes the email
// git reset --hard commitID -> resets to a specific commit
// git reset --hard HEAD -> resets to the last commit
// git reset --hard HEAD~1 -> resets to the previous commit
// git reset --hard HEAD~2 -> resets to the commit before the previous commit
// git reset --soft commitID -> resets to a specific commit but keeps the changes
// git reset --soft HEAD -> resets to the last commit but keeps the changes
// git reset --soft HEAD~1 -> resets to the previous commit but keeps the changes

// git stash -> stashes the changes
// git stash list -> shows the list of stashes
// git stash apply -> applies the last stash
// git stash apply stash@{n} -> applies a specific stash
// git stash drop -> drops the last stash
// git stash drop stash@{n} -> drops a specific stash
// git stash clear -> clears all stashes

// git fetch -> fetches changes from the remote repository
// git diff -> shows the changes between commits

// git tag tagName -> creates a tag
// git tag -a tagName -m "message" -> creates an annotated tag
// git tag -> shows the tags
// git show tagName -> shows the tag details
// git push origin tagName -> pushes the tag to the remote repository
// git push origin --tags -> pushes all tags to the remote repository
// git push origin :tagName -> deletes the tag from the remote repository
// git tag -d tagName -> deletes the tag locally
