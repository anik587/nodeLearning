import express from 'express';

const app = express();

app.get('/', (req, res, next)=>{
    res.send('hello world');
    console.log(process.env.USER);
});

app.listen(3000, ()=>{
    console.log('server listening at 3000')
})