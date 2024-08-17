class vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return 'Beep';
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
};

class car extends vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
};

class motorcycle extends vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return 'VROOM!!!';
    }
}

class Garage {
    #garage = [];
    constructor(capacity) {
        this.capacity = capacity;
    }

    add(v) {
        if (!(v instanceof vehicle)) {
            return 'Only vehicles are allowed in here!'
        } else if (this.#garage.length == this.capacity) {
            return "Sorry but we're full."
        } else {
            this.#garage.push(v)
        }
    }

    peek() {
        return this.#garage;
    }
}