class Animal {
    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    public move(distance: number, track: string): void{
        console.log(`${this.name} moved ${distance} in the ${track}`)
    }
}

let cat = new Animal('Cat');
//cat.name = 'bird'; // not accessible 
cat.move(10, 'road');

class Bird extends Animal{
    readonly run: boolean;// read only can only be used as property
    constructor(name: string){
        super(name);
        this.run = true;
    }

    fly = (distance: number): void => {
        
        console.log(`${this.name} travelled ${distance} meter`)
    }
}

let dove = new Bird('Dove');
dove.fly(100); 