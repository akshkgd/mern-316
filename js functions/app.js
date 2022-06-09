//for loop

// for(let i=0; i<10; i++){
//     // console.log(i)
// }


// for(let i = 1; i<=10; i++){
//     // console.log(i*122);
// }


// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 1) {
//         console.log(i);

//     }
// }



// function grinder(item){
//     console.log('grinding...', item);
// }
// grinder('tomatoes');
// grinder('garlic');



let user = {
    name: 'ashish',
    email: 'ashish@codekaro.in',
    basePay: 46000,
    role: 'Full stack developer'
}

function calSalary(basePay){
    let hra = basePay*.12;
    let bonus = 3000;
    let salary = basePay + hra + bonus;

    return salary;
}


let salary = calSalary(user.basePay);
// console.log(salary);
// console.log(calSalary(user.basePay));


function functionName(){
    console.log('simple function')
}

// arrow function

fnName = () => {
    console.log('arrow function')
}


add = (num1, num2) =>num1 + num2;

sqr = (num) => num*num; //function



console.log(sqr(8))
console.log(sqr(2))
console.log(sqr(4))
console.log(add(2, 8))



//array mapping, filters, reduce, foreach

