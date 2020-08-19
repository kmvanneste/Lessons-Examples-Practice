function DigitalPal () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;
};

DigitalPal.prototype.feed = function() {
    if (hungry) {
        console.log("That was yummy");
        this.hungry = false;
    } else {
        console.log("I am hungry");
    }
}

DigitalPal.prototype.sleep = function() {
    if (this.sleepy) {
        console.log("Zzzzzzzzzz");
        this.bored = true;
        this.sleepy = false;
        this.increaseAge();
    } else {
        console.log("No way, I am not tired!");
    }
}

DigitalPal.prototype.play = function() {
    if (this.bored) {
        console.log("Yay, let's play!!!");
        this.bored = false;
        this.hungry = true;
    } else {
        console.log("Not right now, later");
    }
}

DigitalPal.prototype.increaseAge = function() {
    this.age++;
    console.log("Happy Bday to me!" + this.age + " old");
}

DigitalPal.prototype.bark = function() {
    console.log("Woof! Woof!");
}

DigitalPal.prototype.meow = function() {
    console.log("Meow! Meow!")
}

//BONUS
const animals = {};
animals.dog = new DigitalPal();
animals.cat = new DigitalPal();

const animal = process.argv[2];
const method = process.argv[3];

animals[animal][method]();

// dog.sleep();
// dog.bark();
// cat.play();
// cat.increaseAge();
