class Arena {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
      this.diceSides = 6;
    }
  
    // Roll a die with the specified number of sides
    rollDice() {
      return Math.floor(Math.random() * this.diceSides) + 1;
    }
  
    // Execute a single attack round
    attack(attacker, defender) {
      const attackRoll = this.rollDice();
      const defenseRoll = this.rollDice();
  
      const attackDamage = attacker.attack * attackRoll;
      const defenseStrength = defender.strength * defenseRoll;
  
      const netDamage = Math.max(attackDamage - defenseStrength, 0);
      defender.takeDamage(netDamage);
  
      console.log(`${attacker.name} attacks with ${attackDamage} damage.`);
      console.log(`${defender.name} defends with ${defenseStrength} strength.`);
      console.log(`${defender.name} takes ${netDamage} damage. Remaining health: ${defender.health}`);
    }
  
    // Execute a full match until one player dies
    startMatch() {
      let [attacker, defender] = this.player1.health < this.player2.health
        ? [this.player1, this.player2]
        : [this.player2, this.player1];
  
      while (this.player1.isAlive() && this.player2.isAlive()) {
        this.attack(attacker, defender);
  
        // Swap attacker and defender
        [attacker, defender] = [defender, attacker];
      }
  
      const winner = this.player1.isAlive() ? this.player1 : this.player2;
      console.log(`Game over! ${winner.name} wins with ${winner.health} health remaining.`);
    }
  }
  
  module.exports = Arena;