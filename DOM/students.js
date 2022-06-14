let students = []
function addStudent(){

    let student = {}
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let batch = document.getElementById('batch').value;

    student.name = name;
    student.email = email;
    student.batch = batch;

    students.push(student)
    console.log(students)

}