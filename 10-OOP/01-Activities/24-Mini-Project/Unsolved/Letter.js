class Letter {
    constructor(guess) {
        this.guess = guess;
        this.visible = !/[a-z1-9]/i.test(guess)
    }
    toString () {
        
    }

}