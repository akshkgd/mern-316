//arrays (Project), if else, alert and prompt

// let students = ['ashish', 'saidat', 'shresth', 'nayan', 'preeti']
// console.log(students);
// // students.push('new student');
// students.pop();
// console.log(students)

//splice -> (index, how many elements to delete, elements to add(optional))
let hobbies = ['reading', 'writing', 'music'];
// console.log(hobbies)

hobbies.splice(0, 0, 'codekaro', 'teaching');
// console.log(hobbies);





let totalUsers = Users.length;
// console.log(totalUsers);
let luckyUser = Math.floor(Math.random() * totalUsers);
// console.log(Users[luckyUser].email);

// console.log(Users)



//if else

// let age = prompt('Enter your age');
// if(age >= 18){
//     console.log('eligible');
//     console.log('you can vote');
// }
// else
//     console.log('not eligible')



// let name = prompt('Enter you name')
// console.log('Welcome '+ name);

//check the user status -> active, notActive, banned,
let status = 'banned';

if (status == 'active')
    console.log('user is active')
else if (status == 'notActive')
    console.log('user is not active');
else if (status == 'offline')
    console.log('user is offline');
else
    console.log('user is banned');


// check if the user lies between 16 to 18 years


let age = 18;
// if (age >= 16) {
//     if (age <= 18) {
//         console.log('age is valid');
//     }
//     else
//         console.log('age is not valid');
// }
// else{
//     console.log('age is not valid');
// }

if (age >= 16 && age <= 18) {
    console.log('age is valid');
}
else
    console.log('age is not valid');


if (status == 'online' || status == 'offline') {
    console.log('user is active');
}
else {
    console.log('user is baned');
}