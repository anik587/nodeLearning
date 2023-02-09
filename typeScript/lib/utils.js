"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindrome = void 0;
class Utils {
    constructor() {
        this.diag = (x, y) => {
            return this.sqrt(this.square(x) + this.square(y));
        };
        this.sqrt = Math.sqrt;
    }
    square(x) {
        return x * x;
    }
}
exports.palindrome = (str) => {
    return str === str.split('').reverse().join('');
};
exports.default = Utils;
