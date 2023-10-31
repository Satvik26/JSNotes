console.log('I am in AJAX');



//Asynchronous Programing : Allows multiple things ti happen at the same time.


//Synchronous Programming : The code executes line by line . In this model things happen one at a time. for eg. there is a function getdata() so the code will block the execution until the function is finished. This stops the program for the time the action takes place


//Ways to write asynchronous code in js
/*
1. Async/await
2. Callbacks
3. promises
*/
// setTimeout(function(){
// for (let index = 0; index < 1000; index++) {
//     const element = index;
//     console.log("This is index number" + index);
// }
// },100);

// console.log('done printing');


//AJAX -> Asynchronous Javascript and XML. It is not a programming language . It is set of existing technologies . AJAX helps in fetching data asynchronously without interfering with the existing page. No page reload/refresh. Mordern websites use JSON instead of Xml data transfer

//why to use Ajaz 
/*
1. No page reload
2. better user experience
3. saves network bandwidth
4.Very interactive


Note -> 
Ajax uses XMLHttpRequest object also called xhr object

Modern website use json instead or XML for data transfer

vanilla JS = pure JS

Data can be transferred in any format and protocol (Not always https necessarily)



Client send request to the server and they get a response
*/

//AJax code start

let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click',buttonClickHandler);


function buttonClickHandler(){
    console.log("You have clicked the fetchBtn");

    //create xhr object

    const xhr = new XMLHttpRequest();

    //open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1',true);

    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create',true)

    xhr.getResponseHeader('Content-type', 'application/json');



    //what to do on Progress  we can show a spinner unitl the window is loaded 

    xhr.onprogress = function(){
        console.log("In progress");
    }


    //ready state value in Xhr 
    /*
    0 -> unsent
    1 -> opened
    2 -> Headers Recieved
    3-> loading
    4 -> done 
  */
    // xhr.onreadystatechange = function(){

    //     console.log('ready state is '+ xhr.readyState);
    // }

    xhr.onload = function(){
       if(this.status === 200){
        console.log(this.responseText);
       }
       else{
           console.log("SOme error");
       }
    }


    //send the request
  params =`{"name":"test","salary":"123","age":"23"}`
    xhr.send(params);


    console.log("we are done");


}




let populate = document.getElementById("populateBtn");

populate.addEventListener('click' , pop1);



function pop1(){

    console.log("You have clicked the pop handler");
   const xhr = new XMLHttpRequest();

   xhr.open("GET","https://dummy.restapiexample.com/api/v1/employees", true);


//    xhr.onprogress = function(){
//        console.log("In progress");
//    }


   xhr.onload = function(){
    if(this.status === 200){
        let obj = JSON.parse(this.responseText);
      let obj1 = obj.data;

        console.log(obj1);
     
        let list = document.getElementById('list');

         let str="";
         for(key in obj1){
             str += `<li>${obj1[key].employee_name}</li>`;
         }

     
      list.innerHTML = str;
    }
    else{
        console.log("There is some error");
    }

   }
   


   xhr.send();

}

