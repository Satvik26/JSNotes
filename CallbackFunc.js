console.log("I am in Callback functions");

//callback function is an function inside an function

//setTimeout says that i will work in background and execute the code after the time given

//callback functions can be asynchronous also and synchronous also. ForEach is an Synchronous    setTimeout is an asynchronous function

//It will execute the enroll function after 8 sec and getstudents after 3 secs

// We will give a call function to enroll student i.e as soon as enroll student executed it will run the callback functions that is getstudents

const students = [
    {name : 'harry',subject:'cpp'},
    {name : 'sahil', subject:'cpp'}
]


function enrollStudent(student,callback){
setTimeout(function(){
  students.push(student);
  console.log('students have been enrolled');
  callback();
},3000)

}



function getStudent(){
    setTimeout(function(){
     let str="";
     students.forEach(function(student){
         str += `<li>${student.name}</li>`;
     });

     document.getElementById('student').innerHTML = str;
     
  console.log('students have been fetched');

    },6000)
}

let newStudent = {name : 'sahil1', subject:'js'};
enrollStudent(newStudent,getStudent);
// getStudent();