export class Queues<T> {
    data: T[] = [];
    push(item: T){this.data.push(item)}
    pop(){return this.data.shift()}
}




// class NumberQueue extends Queues{
//     push(item: number){super.push(item)} 
//     pop(): number {return super} 
// }