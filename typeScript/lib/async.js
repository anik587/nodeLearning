"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainAsync = void 0;
const delay = (ms) => new Promise((res, rej) => setTimeout(res, ms));
exports.mainAsync = async () => {
    await delay(1000);
    console.log('1s from async');
    await delay(1000);
    console.log('2s from async');
    await delay(1000);
    console.log('3s from async');
};
