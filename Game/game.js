const Player = require('./Player'); // Make sure path is correct
const Arena = require('./Arena'); // Make sure path is correct

class Game {
    static start() {
      const playerA = new Player("Player A", 50, 5, 10);
      const playerB = new Player("Player B", 100, 10, 5);
      const arena = new Arena(playerA, playerB);
  
      console.log("Game Start!");
      arena.startMatch();
    }
  }
  
  // Start the game
  Game.start();
  


