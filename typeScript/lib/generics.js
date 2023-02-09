"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queues = void 0;
class Queues {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
exports.Queues = Queues;
// class NumberQueue extends Queues{
//     push(item: number){super.push(item)} 
//     pop(): number {return super} 
// }
