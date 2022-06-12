let a = [1,2,3,4,5,6,7,8,9];
console.log(a);

//mapping, filters, reduce

//mapping -> transform

let aSqr = a.map(function(x){
    return x*x;
});

// console.log(aSqr)

let aCube = a.map((x)=>{
    return x*x*x;
});

// console.log(aCube);
let loopArraySqr = [];
for(let i=0; i<= a.length; i++){
    let number = a[i];
    loopArraySqr.push(number * number)
}


// console.log(loopArraySqr)


// let filter5  = a.filter((num)=>{
//     if(num>5)
//     return num;
// }
// );


let filter5  = a.filter((num)=>{
    return num == 5
}
);

console.log(filter5)