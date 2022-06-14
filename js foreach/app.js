// console.log(arr)
// function sqr(num) {
//     return num * num;
// }
// let newArr = arr.map(sqr);
//foreach




// console.log(newArr);


// let arr = ['a', 'b', 'c', 'd', 'e'];


// let result = arr.forEach(sqr)


// function sqr(item, index, arr) {
//     console.log(item, index);
// }


let registration = [
    {name: 'Ivan',  age: 20, amount: 100},
    {name: 'Petr', age: 30, amount: 200},
    {name: 'Ashish', age: 20, amount: 300},
    {name: 'Vasya', age: 40, amount: 400},
    {name: 'Anuin', age: 50, amount: 500},
];


// let totalAmount = registration.reduce((acc, item) => acc + item.amount, 0);

// let totalAmount = registration.forEach(item => {

//     console.log(item.name + ' has paid ' + item.amount);
// });


//reduce -> one element as a result;
// reduce(acc, cur) -> accumulater + current
// reduce (total, student) -> var to store the result, index of the array

// let totalRevenue = registration.reduce((total, student)=>{
//     return total + student.amount;
// },0);

// console.log(totalRevenue);

let reviews = [
    {name: 'Veg supreme pizza', rating: 4.4, votes: 345},
    {name: 'Red sauce pasta', rating: 3.9, votes: 167},
    {name: 'Burger', rating: 3.8, votes: 567},
    {name: 'Idli sambhar', rating: 4.5, votes: 997},
    {name: 'Msala dosa', rating: 3.8, votes: 1267},
    {name: 'green salad', rating: 3.6, votes: 667},
    {name: 'icecream', rating: 3.2, votes: 267},
];

let maxVotes = reviews.reduce((maxVotes, review)=>{
    if(maxVotes < review.votes){
        maxVotes = review.votes
        // mv = 567
    }
    return maxVotes;
}, 0);

let bestSeller = reviews.filter((review)=>{
    if(review.votes === maxVotes && review.rating > 4.0){
        return review;
    }
});
if(bestSeller.length > 0){
    console.log(bestSeller)
}
else{
    console.log('No bestSellers')
}

let mustTry = reviews.filter((item)=>{
    return item.rating > 4.0
});
console.log(mustTry)