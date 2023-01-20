const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.set(('view engine'), 'ejs');
app.get('/', (req, res)=>{
    // res.send('<h1>Hello world!!</h1>')
    // console.log(__dirname + '/index.html')
    // res.sendFile(__dirname + '/index.html');
    res.render('home')
})

app.get('/about', (req, res)=>{
    // res.send('<h1>About Page</h1>')
    
})

app.post('/name', (req,res)=>{
    console.log(req.body.name, req.body.email)
    res.render('success', {name: req.body.name, email: req.body.email})
})

app.get('*', (req, res)=>{
    res.send('<h1>404 not found</h1>')
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})