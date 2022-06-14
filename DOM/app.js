let colors = ['red', 'blue', 'green', 'tomato', 'purple', 'orange', 'blueviolet', 'yellow', 'pink', 'brown', 'black',];

function changeColor(){
    let randomColor = Math.floor(Math.random() * colors.length )
    document.getElementById('title').style.color = colors[randomColor];
}


function cube(){
    let number = document.getElementById('num').value;
    let result = number * number * number;
    console.log(result);
    document.getElementById('num').value = '';
    document.getElementById('result').innerHTML = result;
}