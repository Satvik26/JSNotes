console.log("I am in promise");

/*
Promise - Best video on JS
resolve  -> if he is able to do it
reject -> not able to do it
pending -> inprogess

*/
//func1 is person who says that I promise that i will do this. So I will say that i give you two options i.e resolve or reject

//we use it as substitute for callback

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const error = true;
      if (!error) {
        console.log("Function : Your error has been resolved");
        resolve();
      } else {
        console.log("Function : Your promise has not been resolved");
        reject("sorry not fullfilled");
      }
    }, 2000);
  });
}

// func1().then(function(){
//     console.log("Harry : Thanks for resolving")
// }).catch(function(error){
//     console.log("Harry : very bad bro "+error)
// });

//using promise instead of callback

//function inside then is resolve

//function inside catch is resolve

const students = [
  { name: "harry", subject: "cpp" },
  { name: "sahil", subject: "cpp" },
];

function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(student);
      console.log("students have been enrolled");
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

function getStudent() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });

    document.getElementById("student").innerHTML = str;

    console.log("students have been fetched");
  }, 3000);
}

let newStudent = { name: "sahil1", subject: "js" };
enrollStudent(newStudent)
  .then(function () {
    getStudent();
  })
  .catch(function () {
    console.log("SOme error has been occured");
  });
// getStudent();
