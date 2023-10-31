console.log("I am in");

let myBtn = document.getElementById("myBtn");

let content = document.getElementById("content");

/*
function getData(){
    console.log("Started get Data");
    url = 'harry.txt';
   fetch(url).then((response)=>{
       console.log("First then");
     return response.text();
       
   }).then((data)=> {
    console.log("Second then");
   console.log(data);
   })

}
*/

//response.text() to fetch data as text
// response.json() to fetch data as text

function getData() {
  console.log("Started get Data");
  url = "https://api.github.com/users";
  fetch(url)
    .then((response) => {
      console.log("First then");
      return response.json();
    })
    .then((data) => {
      console.log("Second then");
      console.log(data);
    });
}

console.log("before running get Data");
getData();

console.log("After running get Data");

//post request

//if data is object use stringify
//if data is not object then dont use stringify

function postData() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let data = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  let params = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    // body : JSON.stringify(data)
    body: JSON.stringify(data) 
    //if data is object use stringify
    //if data is not object then dont use stringify
  };
  //we only one parameter then we can remove paranthesis and return
  //refer arrow function
  fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  // fetch(url,params).then(response => response.json()).then(data => console.log(data))
}

postData();
