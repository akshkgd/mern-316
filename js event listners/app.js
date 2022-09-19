document.getElementById('register-btn').addEventListener('click', register);


let users = [];
function register() {
   let email = document.getElementById('email').value;
   let doesUserExist = users.filter((user)=>{
        return user === email;
   });
   if(doesUserExist.length == 0){
        users.push(email);
        let alert = document.getElementById('alert');
        alert.classList.remove('d-none')
        alert.classList.add('alert-success');
        alert.innerHTML = 'Successfully Enrolled';

        setTimeout(()=>{
            alert.classList.add('d-none');
        alert.classList.remove('alert-success');

        },3000)

   }
   else{
    let alert = document.getElementById('alert');
    alert.classList.remove('d-none');
    alert.classList.add('alert-danger');

        alert.innerHTML = 'user already enrolled!';

        setTimeout(()=>{
            alert.classList.add('d-none');
            alert.classList.remove('alert-danger');

        },3000)
   }
}


//    console.log(users)
