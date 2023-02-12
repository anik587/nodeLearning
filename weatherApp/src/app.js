const express = require('express')
const path = require('path')
const hbs = require('hbs')

const { getPosition,getWeather}  = require('./utils/index')

const app = express()
const PORT = process.env.PORT || 3001

const viewPath = path.join(__dirname, '../src/templates/views')
const partialPath = path.join(__dirname, '../src/templates/partials')
const publicPath = path.join(__dirname, '../src/public')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

const staticDirectory = express.static(publicPath)
app.use(staticDirectory)


app.get('/', (req, res)=>{
    res.render('index',{
        info: 'Nature is the mother',
        date: new Date 
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        info: 'Help',
        content: 'Ask for help here anik587@gmail.com'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        info: 'About',
        content: 'This is a simple weather app build on node js using express and hbs'
    })
})

app.get('/weather-data', (req, res)=>{
    let latitude = '';
    let longitude = '';
    let url = '';

    if (!req.query.city){
        return res.status(500).send(JSON.stringify({status: false, message:'City Required', data: []}))
    }
        getPosition(req.query.city, (err, data) => {
            if (data === undefined) {
                return res.status(500).send(JSON.stringify({ status: false, message: err, data: [] }));
            } else {
                latitude = data[0]
                longitude = data[1]
                url = `https://api.darksky.net/forecast/966f210d15503070d798f9e8064091a9/${latitude},${longitude}?units=si&lang=en`
                getWeather(url, (err, data) => {
                    console.log(data)
                    if (data === undefined) {
                        return res.status(500).send(JSON.stringify({ status: false, message: err, data: [] }))
                    } else {
                        return res.status(200).send(JSON.stringify({ status: true, message: err, data: data }))
                    }
                })
            }
        }) 
    
    
})

app.get('*', (req, res) => {
    res.render('404')
})


app.listen(PORT, ()=>{
    console.log('weather app started at port'+ PORT)
})
