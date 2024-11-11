const Player = require('./Player');
const Arena = require('./Arena');

test('Player takes damage correctly', () => {
  const player = new Player("Test Player", 100, 10, 5);
  player.takeDamage(30);
  expect(player.health).toBe(70);
});

test('Game ends when one player reaches 0 health', () => {
  const playerA = new Player("Player A", 50, 5, 10);
  const playerB = new Player("Player B", 1, 10, 5); // Set low health for quick testing
  const arena = new Arena(playerA, playerB);

  arena.startMatch();
  expect(playerB.health).toBe(0);
  expect(playerA.isAlive()).toBe(true);
});