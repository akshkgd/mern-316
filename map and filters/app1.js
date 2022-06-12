let users = [
    {firstName: 'John', lastName: 'Doe', age: 20},
    {firstName: 'Ashish', lastName: 'Doe', age: 30},
    {firstName: 'yash', lastName: 'Doe', age: 40},
    {firstName: 'Jill', lastName: 'Doe', age: 50},
    {firstName: 'nayan', lastName: 'Doe', age: 60},
    {firstName: 'himanshu', lastName: 'Doe', age: 10},
    {firstName: 'dharm', lastName: 'Doe', age: 20},
    {firstName: 'abhi', lastName: 'Doe', age: 34},
    {firstName: 'muksid', lastName: 'Doe', age: 43},
]

let userNames = users.map(user => user.firstName);

// let userAgeFilter = users.filter(user => user.age < 40).map(user=> user.firstName);

let userAgeFilter = users.filter((user)=>{
    if(user.age < 40)
    return user.firstName;
}).map((user)=>{
    return user.firstName + " age is " + user.age;
});



console.log(userAgeFilter);
// console.log(userNames);