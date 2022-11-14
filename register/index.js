const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.set(('view engine'), 'ejs');
mongoose.connect('mongodb+srv://ashish:codekaro12365@cluster0.3ghbpwd.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('MongoDB is Connected')
})
//schema
const registrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    type: String,
    topic: String
})




app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/users', async (req,res)=>{
    const Registration = mongoose.model('registration', registrationSchema);
    let data = await Registration.find({});
    console.log(data[0].name);
    res.render('users', {results: data})
})

app.post('/register', async (req, res) => {
    const Registration = mongoose.model('registration', registrationSchema);

    const ifUserExist = await Registration.find({ email: req.body.email })
    if (ifUserExist == 0) {
        const data = new Registration({
            name: req.body.name,
            email: req.body.email,
        })
        const result = await data.save();
        console.log(result);
    }
    else{
        console.log('Email already exist!!')
    }

    res.redirect('/');


})

app.post('/delete', async (req,res)=>{
    const Registration = mongoose.model('registration', registrationSchema);
    let email = req.body.email;
    let data = await Registration.deleteOne({email: email})
    console.log(data);
    res.redirect('/users')
})
app.post('/edit', async(req,res)=>{
    const Registration = mongoose.model('registration', registrationSchema);
    let email = req.body.email;
    let data = await Registration.findOne({email: email});
    console.log(data);
    res.render('editUser', {user: data})
})
app.post('/update-user', async(req,res)=>{
    const Registration = mongoose.model('registration', registrationSchema);
    let data = await Registration.updateOne(
        {email: req.body.email}, 
        {
            $set: {
                name: req.body.name,
                email: req.body.email,
                type: req.body.type,
            }
        }
    )
        console.log(data);
        res.redirect('/users');
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})