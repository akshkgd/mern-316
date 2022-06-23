function btnClicked(){
    console.log('Button clicked');
}

function showContent(){
    document.getElementById('content').style.display = 'block';
}

function hideContent(){
    document.getElementById('content').style.display = 'none';

}


function welcome(){
    let name = document.getElementById('name').value;
    document.getElementById('nameOutput').innerHTML = name;
}


function cube(){
    let number = document.getElementById('number').value;
    let result = number * number * number;
    document.getElementById('result').innerHTML = result;
}


function enroll(){
    let email = document.getElementById('email').value;
    document.getElementById('alert-success').classList.remove('d-none')
    setTimeout(()=>{
    document.getElementById('alert-success').classList.add('d-none')
    }, 3000);
}