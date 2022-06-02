// variables, arrays and objects -> es6

// let and const -> (var? -> es5 -> es6 ->(scope) )


let email = 'ashish@gmail.com';
email = 'ashish@codekaro.in';
// console.log(email);
// console.log(name);
// var name = 'ashish';



let age = 24;
let isActive = false;
// console.log(age);

//arrays and objects

// let toDos = ['read book', 'fix w5d page bug', 'gym']
// console.log(toDos)


let shoppingList = ['bread', 'butter', 'rice'];
// console.log(shoppingList);
// shoppingList[0] = 'milk';
// shoppingList.push('milk');
// shoppingList.pop();
// shoppingList.pop();

// shoppingList.splice(1,1, 'choclate', 'pulses');

// console.log(shoppingList);


// objects

let user1 = ['ashish', 'ashish@gmail.com', 24, false, '123 street'];

let user = {
    name: 'ashish',
    email: 'ashish@gmail.com',
    age: 24,
    isActive: true,
    address: '123 Street',
    city: 'Pune',
}
// console.log(user)
user.name = 'ashish shukla';
user.mobile = '1234567890';
delete user.city;

// console.log(user)



//array of objects

let users = [
    {name: 'ashish', email: 'ashish@gmail.com'},
    {name: 'sachin', email: 'sachin@gmail.com'},
    {name: 'rahul', email: 'rahul@gmail.com'},
]

console.log(users[1].email)



