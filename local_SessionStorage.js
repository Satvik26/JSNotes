console.log("I am in");

let arr = ['adrak', 'pyaas' ,'bhindi'];


//When we try to store an array in the localstorage with key-value pair it converts the array into string

localStorage.setItem('Name3' ,arr);  // So this is not the right way.

//We can use parse and stringify for this usecase


localStorage.setItem('Name4' , JSON.stringify(arr));



//Add a key-value pair inside local storage
localStorage.setItem('Name' ,'harry');
localStorage.setItem('Name2' , "Satvik");


//localStorage.clear(); //clears the entire local storage


//Clear a particular key-value pair
localStorage.removeItem('Name2');


//Retrieve an item from the local storage
let name = localStorage.getItem("Name");
name = JSON.parse(localStorage.getItem('Name4'));

console.log(name);