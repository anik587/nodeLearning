import * as Utils from './utils';
import fs, { read } from 'fs';
import * as async from './async';
import {Queues} from './generics'
import { idText } from 'typescript';


// primitive types
let a: boolean = true;
let b: number = 2;
let c: string = 'hello world';
let d: undefined = undefined;
let e: null = null;
let f: symbol = Symbol('test');
let g: bigint = 24n;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

// instances/////////////////////////////////////////

let regexp: RegExp = new RegExp("ab+c"); 
let array: Array<number> = [1,2,3];
let set: Set<number> = new Set([1,2,3]);
let arrayShorthand: number[] = [1,2,3];

console.log(regexp);
console.log(array);
console.log(set);
console.log(arrayShorthand);

// tuple/////////////////////////////////////////

let tuple: [number, number] = [0,1]; 

// type aliases/////////////////////////////////////

type Point = {x: number, y: number}; 
let center: Point = {x: 0,y:1}
console.log(tuple);

 // function //////////////////////////////////////////

function add(a: number,b: number): number{ 
     return a+b;
}

function log(message: string): void{
    return console.log(message);
}

// rest params //////////////////////////////////////

function sum(...values: number[]): number{   
    return values.reduce((previous, current) : number =>{
        return previous+current;
    })
}
type AddFirsthand = (a: number,b: number) => number;  // type aliases

let addFirsthand : AddFirsthand;
addFirsthand = (a, b)=>{
    return a+b;
}



// structural type//////////////////////////////////
type User = {id: string};
type Product = {id: string};

let user: User;
let product: Product;  

user = {id:'anik'};
product = {id: 'soap'};

user = product;

console.log(user);
console.log(product);

// duck typing // structural typing ///////////////////////
type Point2D = {x: number, y: number};
type Point3D = {x: number, y: number, z: number};

let point2d = {x:2, y:1};
let point3d = {x:1, y:2, z:3};

function print2D(point: Point2D): Point2D{
    console.log(point);
    return point;
}

print2D(point2d);
print2D(point3d); 

// casting///////////////////////////////
let cast;
cast = '1234';

cast = +cast; 

console.log(cast)


//export import//////////////////////////////////////////


let utils = new Utils.default();  


console.log(utils.diag(4,3));
console.log(utils.square(5));

console.log(Utils.palindrome('anik'));

console.log('Loaded', process.env.USER);

fs.writeFileSync('hello.txt', 'hello world');


 //generics argument//////////////////////////////////////

const queues = new Queues<number>(); 

queues.push(13.3714);
queues.push(14.5701);

console.log(queues.pop()?.toPrecision(3));
console.log(queues.pop()?.toPrecision(2));


//any and unknown for sanity check ///////


let somethingany : any;
let somethingunknown : unknown



const loadString: any = (params: any): any =>{
    return params;
}

const loadUnkown: unknown  = (params: unknown) : unknown=>{
    if(typeof params == 'string'){
        return params.trim();
    }
}

somethingany = loadString('asdasdsad');
console.log(somethingany.trim());

somethingunknown = loadString('asdasdsad');
if(typeof somethingunknown == 'string'){
    console.log(somethingunknown.trim());
}

if(typeof loadUnkown == 'function'){
    somethingany = loadUnkown('werwq');
    console.log(somethingany.trim());    
}

if(typeof loadUnkown == 'function'){
    somethingunknown = loadUnkown('werwer');
    if(typeof somethingunknown == 'string'){
        console.log(somethingunknown.trim());
    }
}


//type accertion ////////////////////////////////////
let accertion: unknown = 'this is very lovely';

console.log((accertion as string).toLocaleUpperCase());
console.log((accertion as string).toLowerCase());


// async //////////////////////////////////////////////

async.mainAsync();

// readonly ////////////////////////////////

type Dummy = {
    readonly x: number,
    readonly y: number
}

const point: Dummy = {
    x: 0,
    y:0
}

console.log(point.x);
//point.x = 1; // not accessible


// union types ////////////////////////////////////


 function fromatCommandline(input: string | string[]) : string{
    let line: string = '';
    if(typeof input === 'string'){
        line = input.trim();
    }else{
        line = input.map(str => str.trim()).join('');
    }
    return line;
 }

 console.log(fromatCommandline('hello'));
 console.log(fromatCommandline(['hello', 'world']));
 //console.log(fromatCommandline(1337)) //error;

 type Padding = 
 |number 
 | string
 function paddLeft(value: string, padding: Padding): any{
     if (typeof padding === 'number'){
        return Array(padding+1).join(' ')+value;
     }
     if(typeof padding === 'string'){
        return padding+value
     }
     throw new Error(`Expected number or string but got ${padding}`)
 }

 console.log(paddLeft('Hello world', 4));
 console.log(paddLeft('Hello world', '   '));
 console.log(paddLeft('Hello world', '----'));
// console.log(paddLeft('Hello world', false));
 
// literal types///////////////////////////

let direction: 'North' | 'East' | 'South' | 'West'
direction = 'North';
function move(distance: number, direction: string){
    console.log(`Duck moved ${distance}m towards ${direction}`)
}
move(10, direction);

type DiceValue = 1 | 2| 3| 4 | 5| 6;

function rollDice(){
    return Math.floor((Math.random()*6))+1 as DiceValue
}
console.log(`Dice value is ${rollDice()}`)

// type narowing /////////////////////////////


class Cat{
    meow(){
        console.log(`meow`)
    }
}


class Dog{
    bard(){
        console.log(`bark`)
    }
}

type Animal = Cat | Dog;


function speak(animal: Animal){
    if(animal instanceof Cat){
        animal.meow();
    }

    if(animal instanceof Dog){
        animal.bard();
    }
}

let dog = new Dog()
let cat = new Cat();

speak(dog);
speak(cat);

//discriminated unions

type Circle = {
    kind: 'circle',
    radious: number
}

type Square = {
    kind: 'square',
    size: number
}

type Rectangle = {
    kind: 'rectangle',
    width: number,
    height: number
}


type Shape = 
    | Square 
    | Rectangle
    | Circle;


function area(shape: Shape){
    if(shape.kind === 'square'){
        return shape.size*shape.size;
    }

    if(shape.kind === 'rectangle'){
        return shape.width*shape.height;
    }

    if(shape.kind === 'circle'){
        return Math.floor(Math.PI * (shape.radious ** 2));
    }


}


console.log(`area of suqare ${area({kind: 'square',size: 5})} square meters`);
console.log(`area of rectangle ${area({kind: 'rectangle',width: 3, height: 4})} square meters`);
console.log(`area of circle ${area({kind: 'circle',radious: 10})} square meters`);


type ValidationSuccess = {
    isValid: true,
    validationValue: number
}

type ValidationFailed = {
    isValid: false,
    validationValue: number
}

type Validation = 
    | ValidationSuccess
    | ValidationFailed;

function logResulrt(result: Validation){
    if(result.isValid){
        console.log('Success, validated code:', result.validationValue);
    }

    if(!result.isValid){
        console.log('Failed, error code:', result.validationValue);
    }
}

logResulrt({isValid: true, validationValue: 200});
logResulrt({isValid: false, validationValue: 404});


// null versus undefined //////////////////////


console.log(null === null)
console.log(undefined === undefined)
console.log(undefined == null)
console.log(false == null)
console.log(0 == null)
console.log('' == null)


function decorate(value: string | null | undefined){
    // if(value == null){
    //     return value;
    // }
    return `-------${value?.trim()}--------------`; // shorthand syntex for checking null or undefined before trim
}

console.log(decorate('love coding'))
console.log(decorate(null));
console.log(decorate(undefined));

// intersection types ////////


type Persion = {
    name: string
}
type Email = {
    email: string
}
type Phone = {
    phone?: number   //opotional operator might work here
}

type ContactDetails= 
    & Persion 
    & Email 
    & Phone;           // not here

function contact(details: ContactDetails){
    return `Dear ${details.name}, We have received your email ${details.email}.Please give us a call ASAP at our number ${details.phone}`
}


console.log(contact({
    name: 'anik',
    email: 'anik587@gmail.com',
    phone:  17782151,
}))


// optional modifier //////////////////////////////

class Optional{
    x?: number | null;
    y?: NumberConstructor;
}

const optional = new Optional();

console.log(optional.x);

optional.x ==1;
optional.y = undefined;

optional.x = null;

console.log(optional.x);
console.log(optional.y);


// non null assertion operator //////////////////////////////////////


type Data = {
    x: number,
    y: number
}

let data: Data;
function initialize(){
    data =  {x: 0, y: 1}
}

initialize();
console.log('Aftetr initialization', data!.x, data!.y); // non null assertion opetatior



/**
 * safe way
 * 

function initialize(): Data{
    return {x: 0, y: 1}
}

const data = initialize();
console.log('Aftetr initialization', data.x, data.y); // non null assertion opetatior

 */
