class Character {
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    return (this.hitPoints <= 0) ? false : true;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    console.log(`${opponent.name} was attacked by ${this.strength} force!`)
    // console.log which character was attacked and how much damage was dealt
    opponent.hitPoints -= this.strength;
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class
const frank = new Character ("Frank", 100, 100);
const joe = new Character ("Joe", 150, 150);

frank.printStats();
joe.printStats();
// Create an interval that alternates attacks every 2000 milliseconds
let frankTurn = true;

const playInterval = setInterval (() => {
  if (!frank.isAlive() || !joe.isAlive()) {
    clearInterval(playInterval);
    console.log("game is over");
  } 
  else if (frankTurn) {
    frank.attack(joe);
    joe.printStats;
    frankTurn = false;
  } else {
    joe.attack(frank);
    frank.printStats();
    frankTurn = true;
  }
},2000)