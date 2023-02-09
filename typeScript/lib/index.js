"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils = __importStar(require("./utils"));
const fs_1 = __importDefault(require("fs"));
const async = __importStar(require("./async"));
const generics_1 = require("./generics");
// primitive types
let a = true;
let b = 2;
let c = 'hello world';
let d = undefined;
let e = null;
let f = Symbol('test');
let g = 24n;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
// instances/////////////////////////////////////////
let regexp = new RegExp("ab+c");
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
let arrayShorthand = [1, 2, 3];
console.log(regexp);
console.log(array);
console.log(set);
console.log(arrayShorthand);
// tuple/////////////////////////////////////////
let tuple = [0, 1];
let center = { x: 0, y: 1 };
console.log(tuple);
// function //////////////////////////////////////////
function add(a, b) {
    return a + b;
}
function log(message) {
    return console.log(message);
}
// rest params //////////////////////////////////////
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
let addFirsthand;
addFirsthand = (a, b) => {
    return a + b;
};
let user;
let product;
user = { id: 'anik' };
product = { id: 'soap' };
user = product;
console.log(user);
console.log(product);
let point2d = { x: 2, y: 1 };
let point3d = { x: 1, y: 2, z: 3 };
function print2D(point) {
    console.log(point);
    return point;
}
print2D(point2d);
print2D(point3d);
// casting///////////////////////////////
let cast;
cast = '1234';
cast = +cast;
console.log(cast);
//export import//////////////////////////////////////////
let utils = new Utils.default();
console.log(utils.diag(4, 3));
console.log(utils.square(5));
console.log(Utils.palindrome('anik'));
console.log('Loaded', process.env.USER);
fs_1.default.writeFileSync('hello.txt', 'hello world');
//generics argument//////////////////////////////////////
const queues = new generics_1.Queues();
queues.push(13.3714);
queues.push(14.5701);
console.log(queues.pop()?.toPrecision(3));
console.log(queues.pop()?.toPrecision(2));
//any and unknown for sanity check ///////
let somethingany;
let somethingunknown;
const loadString = (params) => {
    return params;
};
const loadUnkown = (params) => {
    if (typeof params == 'string') {
        return params.trim();
    }
};
somethingany = loadString('asdasdsad');
console.log(somethingany.trim());
somethingunknown = loadString('asdasdsad');
if (typeof somethingunknown == 'string') {
    console.log(somethingunknown.trim());
}
if (typeof loadUnkown == 'function') {
    somethingany = loadUnkown('werwq');
    console.log(somethingany.trim());
}
if (typeof loadUnkown == 'function') {
    somethingunknown = loadUnkown('werwer');
    if (typeof somethingunknown == 'string') {
        console.log(somethingunknown.trim());
    }
}
//type accertion ////////////////////////////////////
let accertion = 'this is very lovely';
console.log(accertion.toLocaleUpperCase());
console.log(accertion.toLowerCase());
// async //////////////////////////////////////////////
async.mainAsync();
const point = {
    x: 0,
    y: 0
};
console.log(point.x);
//point.x = 1; // not accessible
// union types ////////////////////////////////////
function fromatCommandline(input) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(str => str.trim()).join('');
    }
    return line;
}
console.log(fromatCommandline('hello'));
console.log(fromatCommandline(['hello', 'world']));
function paddLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected number or string but got ${padding}`);
}
console.log(paddLeft('Hello world', 4));
console.log(paddLeft('Hello world', '   '));
console.log(paddLeft('Hello world', '----'));
// console.log(paddLeft('Hello world', false));
// literal types///////////////////////////
let direction;
direction = 'North';
function move(distance, direction) {
    console.log(`Duck moved ${distance}m towards ${direction}`);
}
move(10, direction);
function rollDice() {
    return Math.floor((Math.random() * 6)) + 1;
}
console.log(`Dice value is ${rollDice()}`);
// type narowing /////////////////////////////
class Cat {
    meow() {
        console.log(`meow`);
    }
}
class Dog {
    bard() {
        console.log(`bark`);
    }
}
function speak(animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    if (animal instanceof Dog) {
        animal.bard();
    }
}
let dog = new Dog();
let cat = new Cat();
speak(dog);
speak(cat);
function area(shape) {
    if (shape.kind === 'square') {
        return shape.size * shape.size;
    }
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
    if (shape.kind === 'circle') {
        return Math.floor(Math.PI * (shape.radious ** 2));
    }
}
console.log(`area of suqare ${area({ kind: 'square', size: 5 })} square meters`);
console.log(`area of rectangle ${area({ kind: 'rectangle', width: 3, height: 4 })} square meters`);
console.log(`area of circle ${area({ kind: 'circle', radious: 10 })} square meters`);
function logResulrt(result) {
    if (result.isValid) {
        console.log('Success, validated code:', result.validationValue);
    }
    if (!result.isValid) {
        console.log('Failed, error code:', result.validationValue);
    }
}
logResulrt({ isValid: true, validationValue: 200 });
logResulrt({ isValid: false, validationValue: 404 });
// null versus undefined //////////////////////
console.log(null === null);
console.log(undefined === undefined);
console.log(undefined == null);
console.log(false == null);
console.log(0 == null);
console.log('' == null);
function decorate(value) {
    // if(value == null){
    //     return value;
    // }
    return `-------${value?.trim()}--------------`; // shorthand syntex for checking null or undefined before trim
}
console.log(decorate('love coding'));
console.log(decorate(null));
console.log(decorate(undefined));
function contact(details) {
    return `Dear ${details.name}, We have received your email ${details.email}.Please give us a call ASAP at our number ${details.phone}`;
}
console.log(contact({
    name: 'anik',
    email: 'anik587@gmail.com',
    phone: 17782151,
}));
// optional modifier //////////////////////////////
class Optional {
}
const optional = new Optional();
console.log(optional.x);
optional.x == 1;
optional.y = undefined;
optional.x = null;
console.log(optional.x);
console.log(optional.y);
let data;
function initialize() {
    data = { x: 0, y: 1 };
}
initialize();
console.log('Aftetr initialization', data.x, data.y); // non null assertion opetatior
/**
 * safe way
 *

function initialize(): Data{
    return {x: 0, y: 1}
}

const data = initialize();
console.log('Aftetr initialization', data.x, data.y); // non null assertion opetatior

 */
