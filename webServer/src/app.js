const path = require('path');
const express = require('express');
const PORT = 3000;
const app = express();

console.log(__dirname);
console.log(path.join(__dirname, '../public'));


app.get('', (req, res)=>{
  res.send('<h1>Hello express</h1>>');
});

const add = (a, b)=>{
    return new Promise(( resolve, reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        }, 2000)
    })
}
app.get('/help',  async (req, res) => {
    res.send({
        name: 'anik',
        age: 29
    });

    add(1,2).then( res => {
        console.log(res)
        return add(res, 5)
    }).then( res2 => {
        console.log(res2)
    }).catch(e => {
        console.log(e)
    })

});

app.get('/about', (req, res) => {
    res.send([
        {name: 'shojib', age: 50},
        {name: 'sara', age: 60},
    ]);
});

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});