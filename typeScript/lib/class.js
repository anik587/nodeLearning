"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance, track) {
        console.log(`${this.name} moved ${distance} in the ${track}`);
    }
}
let cat = new Animal('Cat');
//cat.name = 'bird'; // not accessible 
cat.move(10, 'road');
class Bird extends Animal {
    constructor(name) {
        super(name);
        this.fly = (distance) => {
            console.log(`${this.name} travelled ${distance} meter`);
        };
        this.run = true;
    }
}
let dove = new Bird('Dove');
dove.fly(100);
