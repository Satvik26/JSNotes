console.log("I am in ");

/*Types of Events :

1. mouseover  -> same like hover
2. click  // jst left click
3. dblclick
4. mousedown  ->> right click scroll click
5. mouseup
6. mouseenter
7. mouseleave
8. mousemove

*/

document.getElementById('heading').addEventListener
('dblclick',function(e){
console.log("I haveclicked the heading");
console.log(e);   // it will open a mouse event and target is most important
let var1 = e.target;
var1 = e.target.className; //It gives t
let var2 = e.target.classList;  // IT gives all the classes present in the element. Inside an array whose name is DOMTokenList.

//we can use Array.from for iteration

let v =  Array.from(e.target.classList);
console.log(var1);
console.log(var2);
console.log(v);


let v2 = e.offsetX;  // gives the co-ordinates from the x axis where we clicked
let v3 = e.offsetY; // gives the co-ordinates from the y axis where we clicked

console.log(v2, v3); 



let v4= e.clientX; // gives the co-ordinates in terms of the browser window in x
let v5 = e.clientY; // gives the co-ordinates in terms of the browser window in y

console.log(v4,v5);


});




let btn = document.getElementById('btn');



btn.addEventListener('click', func1);
//The default behaviour of the button is that whenever u click it. It will submit the form. To surpass it we need to use an method called preventDefault();
function func1(e){

console.log("Thanks" , e);
e.preventDefault();


};

document.querySelector(".container").addEventListener('mousemove' , function(e){

    document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY} ,${e.offsetX})`
console.log(e.offsetX ,e.offsetY);

});