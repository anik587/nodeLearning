const delay = (ms: number)  => new Promise((res, rej)=> setTimeout(res, ms));

export const mainAsync = async ()=>{
    await delay(1000);
    console.log('1s from async');
    await delay(1000);
    console.log('2s from async');
    await delay(1000);
    console.log('3s from async');
}