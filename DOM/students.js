let students = []
function addStudent(){

    let student = {}
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    student.name = name;
    student.email = email;

    students.push(student)
    // creating new element

    document.getElementById('studentsParentContainer').innerHTML = '';
    document.getElementById('name').value ='';
    document.getElementById('email').value = '';


    students.map((student)=>{
        let parentDiv = document.getElementById('studentsParentContainer');
        //creating new element
        let studentDiv = document.createElement('div');
        let studentName = document.createElement('h3');
        let studentEmail = document.createElement('p');

        //adding class name
        studentDiv.classList.add('student');
        studentName.classList.add('student-name');
        studentEmail.classList.add('student-email');


        //adding values
        studentName.innerText = student.name;
        studentEmail.innerText = student.email;

        // appending the element
        parentDiv.appendChild(studentDiv);
        studentDiv.appendChild(studentName);
        studentName.appendChild(studentEmail);
    })




}