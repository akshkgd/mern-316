const { create } = require('domain');
const express = require('express');
const { copyFileSync } = require('fs');
const app = express()
const mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect('mongodb+srv://ashish:codekaro12365@cluster0.3ghbpwd.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connected')
})
const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
})
const createUser = async () =>{
    const User = mongoose.model('users', usersSchema)
    let data = new User({
        name: 'Arpit',
        email: 'Arpit@gmail.com',
        address: 'new delhi'
    })
    const result = await data.save();
    console.log(result);
}
// createUser()



const deleteUser = async () =>{
    const User = mongoose.model('users', usersSchema)
    let data = await User.deleteOne({name: 'Arpit'})
    console.log(data);
}

// deleteUser()

const findUser = async () =>{
    const User = mongoose.model('users', usersSchema)
    let data = await User.find({name: 'Yash'})
    console.log(data);
}

// findUser()

const updateUser = async()=>{
    const User = mongoose.model('users', usersSchema)
    let data = await User.updateOne(
        {name: 'Ashish'},
        {
            $set: {name: 'Ashish Shukla'}
        }
        
    )
    console.log(data);
}
updateUser()

// app.listen(3000, ()=>{
//     console.log('server is running on port 3000')
// })