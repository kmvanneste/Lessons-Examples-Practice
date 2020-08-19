const Vehicle = require("./vehicle");

class Car extends Vehicle {
    constructor(id, color, passengers) {
        super(id, 4, "Vroom");
        
        this.color = color;
        this.passengers = passengers;
    }

    useHorn() {
        console.log(`This car makes this sound: ${this.sound}`)
    }
    checkPassengers () {
        if (this.passengers.length > 4) {
            console.log("Cars capacity exceeded");
        }
        else {
            console.log(`We still have room for ${4 - this.passengers.length}`)
        }
    }
}

const carPassengers = [ {name: "Kristen"}, {name: "Penny"}, {name: "Taylor"} ];

const honda = new Car(1, "red", carPassengers);

honda.printInfo();

honda.useHorn();

honda.checkPassengers();