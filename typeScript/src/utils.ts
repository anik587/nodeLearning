class Utils {
    private sqrt;
    constructor(){
        this.sqrt = Math.sqrt;
    }
    


    square(x: number):number {
        return x * x;
    }

    diag = (x: number, y: number): number =>{
        return this.sqrt(this.square(x) + this.square(y));
    }
}



export const palindrome = (str: string): boolean=> {
    return str === str.split('').reverse().join('')
}



export default Utils;