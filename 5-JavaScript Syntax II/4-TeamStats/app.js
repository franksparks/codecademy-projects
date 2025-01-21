/*
Practice Objects in JavaScript by creating a data structure to maintain and manipulate sports stats!

In this project, you will use what you know about JavaScript objects to create a program that builds and manipulates a sports team. 

We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. 
It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights from them. 
For example, you might want to get the total number of games your team has played, or the average score of all of their games.

*/

const team = {
  _players: [
    { firstName: "Ferran", lastName: "Bals", age: 36 },
    { firstName: "Alex", lastName: "Moreno", age: 25 },
    { firstName: "María José", lastName: "Torrijos", age: 18 },
  ],
  _games: [
    {
      opponent: "Gràcia",
      teamPoints: 1,
      opponentPoints: 2,
    },
    { opponent: "Europa", teamPoints: 0, opponentPoints: 2 },
    { opponent: "Las Palmas", teamPoints: 3, opponentPoints: 0 },
  ],
  get players() {
    return this._players;
  },
  get _games() {
    return this._players;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);

console.log(team._players);
console.log(team._games);
