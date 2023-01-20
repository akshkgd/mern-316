const express = require('express');
const ejs = require('ejs');
const app = express();
app.set(('view engine'), 'ejs')

// Dummy Data
const users = ['Ashish', 'Yash', 'Himanshu', 'Subham', 'Nayan', 'Meghna', 'Suman']

app.get('/', (req, res)=>{
    res.render('home', {usersData : users})
})

app.listen(3000, ()=>{
    console.log('Server running on port 3000!')
})