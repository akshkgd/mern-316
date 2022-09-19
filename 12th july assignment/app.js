let students = [];


function addStudent() {
    let studentContainer = document.getElementById('studentContainer');
    studentContainer.innerHTML = '';
    let id = document.getElementById('enrollmentId').value;
    let name = document.getElementById('name').value;
    let isSameId = students.filter((student)=>{
        return student.id == id;
    })
    if(isSameId.length == 0){
        let studentTempObject = {}
        studentTempObject.name = name;
        studentTempObject.id = id;
        students.push(studentTempObject)
    }
    else{
        alert('Enrollment number '+ id + ' already exist!!')
    }
    

    //creating new element
    
    students.map((student) => {
        let studentCard = document.createElement('div');
        let studentName = document.createElement('h3');
        let studentId = document.createElement('p');
        studentName.classList.add('student-name');
        studentId.classList.add('student-id');
        studentCard.classList.add('student-card');

        studentName.innerHTML = student.name;
        studentId.innerHTML = student.id;

        

        studentContainer.appendChild(studentCard);
        studentCard.appendChild(studentName);
        studentCard.appendChild(studentId);
    })

}