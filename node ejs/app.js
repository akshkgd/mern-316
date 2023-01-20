const express = require('express');
const bodyParser = require('body-parser')
const ejs = require('ejs');
const app = express();
app.set(('view engine'), 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))
let users = []



//routes
app.get('/', (req,res)=>{
    res.render('home')
})
app.post('/register', (req,res)=>{
    let user = {
        name: req.body.name,
        email: req.body.email
    }
    users.push(user);
    console.log(users)
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})