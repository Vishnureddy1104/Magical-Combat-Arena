class Player {
    constructor(name, health, strength, attack) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.attack = attack;
    }

    // Check if player is alive
    isAlive() {
      return this.health > 0;
    }
  
    // Reduce health based on damage taken
    takeDamage(damage) {
      this.health = Math.max(this.health - damage, 0);
    }
  }

  module.exports = Player;