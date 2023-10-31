console.log("I am in");

// CHAPTER 1 START  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*

console.time("The time took")
console.log("I am in");
console.log([1,2,3,4]);
console.log({harry: 'satvik' , mark : 23 , age: 22 , class: 'science'});
console.table({harry: 'satvik' , mark : 23, age: 22 , class: 'science'});
console.warn("This an warning");
console.timeEnd("The time took");
console.assert(30<29,'This is an error');
console.error("this is an error");

*/

// CHAPTER 1 END   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//CHAPTER 2 START >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Variables in JS var->  Global scope , let , const


/*
RULES FOR CREATING JS VARIABLES

1. cannot start with a number.
2. Must start with a letter , an underscore , $
3. Can only contain with letter, numbers, _ ,$;
3. Are case sensitive.
4. Cannot start with spaces

NOTE : DONT START WITH _ and $ for creating variables.

*/


/*

let hero;
var name = 'harry';
var channel;

function sat(){

    var a ;
    a=10;
}
console.log(name, channel);


// we can't change constant variable. If we change it will throw error.
const ownerName = "harry";  

console.log(ownerName);

// ownerName = "sat";       

// let ->> let is having a block level scope.
let city ='delhi';
{
 
 //console.log(city);


 {

    console.log(city);
 }

}


// If we have declared a const array then we can add an element but we can't change the element of an array.

// we can change the element one by one i.e arr[1] = 40 but we can't reintialize like arr = [10,20,30]
  const arr = [1 ,2 , 3, 4];
  console.log(arr);
  arr.push(5);
  console.log(arr);
 
  arr[1] = 3;
  arr[5] = 400;
  console.log(arr);


*/


//CHAPTER 2 END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





//CHAPTER 3 Start >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


/* Data types:

JS is an dynamically typed language. We don't need to define type of variable.

1. Primitive data type  (Stack)

string  ->  "harry"
number  -> 34
boolean   -> true false
null -> intentional empty value
undefined -> Its a place holder which is stored in the memory of the variable until it is initialised.
symbol




2. Referenced data type (Heap)

array
object
funtions
dates

*/
/*

let name1 = "harry";
let name2 =  345;
console.log(name1);

//typeof operator for getting the type of the variable.
console.log(typeof name1 , typeof name2);

// Boolean

let isDriver = true;
console.log(typeof isDriver);

// NULL   (Null is an primitive data Type but it returns object when we do typeof of an null variable. It a bogous value)

let nullVar = null;
console.log(typeof nullVar);

// undefined  

let undef = undefined;
console.log(typeof undef);

// typeof of a referenced datatype is always an object.

//array   typeof -> object

myarr = [1,2,3,4,5,6, false, 'satvik'];
console.log(typeof myarr);

// object   Typeof -> Object

let marks = {
  harry : 89,
  satvik : 90,
  vishu : 100,


}

console.log(typeof marks , marks);
console.table(marks);

//function    typeof-> function

function fun(){}

console.log(typeof fun);

// Dates  typeof -> object

let date = new Date();
console.log(typeof date);


*/

//CHAPTER 3 END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>















//CHAPTER 4 Start >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Type conversion and Type coercion


//****************TYPE CONVERSION********************************

// String  -> changes the datatypes to string 

/*
let myvar = 34;
console.log(myvar ,typeof myvar);

myvar = String(34);
console.log(myvar, typeof myvar);

// Change date to string

let date = new Date();
console.log(date , typeof date);

date = String(date);
console.log(date, typeof date);

//Change array to string

let arr = [1,2,3,4,'satvikbisht'];
console.log(arr , typeof arr, arr.length);   // length is 5 since its an object now

arr = String(arr);
console.log(arr , typeof arr, arr.length);  // length is 19 since its an string now


// toString()   -> changes the data types to string

let a = 34;
console.log(a , typeof a);

console.log(a.toString(), typeof a);


// Number  -> changes to number  example a = '34.0919' then Number will change it to 34.0919   works same as parseFloat ;

//parseInt    ---> changes to intergers
//parseFloart --> changes to numeric value



let stri = "34.3434";
console.log(stri, typeof stri);

stri = Number(stri);
console.log(stri , typeof stri);


let stri1 = "34.99999";
console.log(stri1, typeof stri1);

stri1 = parseFloat(stri1);
console.log(stri1 , typeof stri1);

console.log(stri1);

let stri2 = "34.34343434";
console.log(stri2, typeof stri2);

stri2 = parseInt(stri2);
console.log(stri2 , typeof stri2);

//to.Fixed()     when we to keep decimal places according to our requirements


let stra = 34.44444;
console.log(stra.toFixed(2) , typeof stra);

//*******************************TYPE CONVERSION ENDS *************************



//***************************TYPE COERCION ******************************





let mystr = '9000';
let mynum = 1000;

console.log(mystr + mynum);


console.log( 10 + '10');

*/

//CHAPTER 4 END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//CHAPTER 5 Starts >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//STRING FUNCTIONS

/*
1.  concat()
2. length;
3.  toLowerCase();
4. toUpperCase();
5. indexOf();
6. lastIndexOf();
7. CharAt();
8. endsWith();
9. includes();
10. substring(a,b);    a is inclusive  b is exclusive
11. slice(a,b);  a is inclusive  b is exclusive      Doesn't effect the original array
12. splice(a,b)    a  denotes the index from which the method will start  its operation on the array.   b denotes the number of values to be deleted from the start. If the value is 0, nothing will be deleted.
make changes to the original array.
12. split(' ');
13. replace()       replaces first occurrences
*/


/*
const nam = 'Harry';
const greeting = 'Good Morning';

console.log(greeting+ ' ' + nam);


let html = '';

html = '<h1>THIS IS HEADING</h1>' + '<p>THIS IS MY PARA</p>'

html = html.concat(' this ','str');

// html = '<h1>THIS IS HEADING</h1><p>THIS IS MY PARA</p> this str'

console.log(html);
console.log(html.length);  // find the length of the string 55
console.log(html.toLowerCase());  //will change the html to lowercase
console.log(html.toUpperCase());  // will change the html to uppercase
console.log(html);

console.log(html[0]);   // answer is <


console.log(html.indexOf('<'));   // gives first occurrence 0
console.log(html.indexOf('THIS'));  /// gives the occurrence 4;
console.log(html.lastIndexOf('r'));  // 54
console.log(html.length); //55
console.log(html.charAt(0));
console.log(html.endsWith('this'));   // false
console.log(html.endsWith('str'));  //true
console.log(html.includes('00000000dfdssds'));
console.log(html.includes('this'));
console.log(html.substring(0,2));   //  <h
console.log(html.substring(-4));  // It will return the whole string
console.log(html.slice(-5));  // it will return last 5 characters
console.log(html.split(" "));  // It will split the string into array.
console.log(html.replace('str' , 'heeralal'));
console.log(html.slice(3,4));


// TEMPLATE LITERALS

let fruit1 = 'mango';
let fruit2 = 'banana';
let myHtml = `Hello ${nam}
              <h1>This is heading</h1>
              <p>You like ${fruit1} and ${fruit2}</p>`;
document.body.innerHTML = myHtml;

*/

//CHAPTER 5 END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





//CHAPTER 6 START >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ARRAY

// In array we have properties and method
/*
1. length       property
2. Array.isArray()   method
3. indexOf()     it return the index of the element 


mutuating array or modifying

4. push()      add element in the end
5. unshift()   add element in the start
6. pop()     delete element in the end
7. shift()    delete element in the start
8. splice(a, b)       a index of element and delete b no. of elements inclding that index element after that 
9. reverse();
10. concat();
*/

// one syntax of array

/*
const  marks = [90,95,96,50,29];
const fruit  = ['banana', 'apple'  , 'grapes'];
const mixed = [90,'banana', 'apple',89];
console.log(marks, fruit, mixed);


//other syntax of array

const arr = new Array(9,3,3,30);
console.log(arr);


// for finding length of array i.e. elements present in the array.

console.log(marks.length , fruit.length);


//for finding the ele

console.log(Array.isArray(90)); // false since its not an array

console.log(Array.isArray(marks));  // true since marks is an array


let index = marks.indexOf(90);  // Returns the index of the element in the array
console.log(index);

// Mutuating or Modifying arrays.

marks.push(1000);   // push the element in the end

console.log(marks);


marks.unshift(1009);  // push the element in the starting
console.log(marks);

marks.pop();                 // delete the elements in the end
console.log(marks);

marks.shift();         // delete the elements in the start.
console.log(marks);


marks.splice(1,2);   //It means start from index and delete no. of elements after that
console.log(marks);


marks.reverse();    // reverse the array
console.log(marks);

let marks2 = [1,2,3];
let marks3 = [1,2,3];

marks2 = marks2.concat(marks3);
console.log(marks2);




// Object


let myObj = {

  name: 'harry',
  age : 45,
  isActive : true,
   marks: [23,44,55],
           obj1 : {
                a : 1,
                b: 2
            }


};

console.log(myObj);
console.log(myObj.marks);
console.log(myObj.marks[0]);
console.log(myObj.name);
console.log(myObj.obj1.a);

*/

//CHAPTER 6 END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




//CHAPTER 7 START >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// IF ELSE    -> if we just use if if then it will check all the conditions irrespective of getting the answer but for if we use if the else if the else if then else

// so it will check it one by by one it will not check the remaining conditions if we get the answer.
/*
if(   ){
                       ->>> will check this

}

if ( ) {

                  ->> will check this also.
}




if() {
                             ->>>>>>>>> if we get the answer wont check the below conditions
                             ->>>>>>>>> if we dont get the answer then it will check below conditions
}

else if() {
                              ->>>>>>>>> if we get the answer wont check the below conditions
                             ->>>>>>>>> if we dont get the answer then it will check below conditions
                              
}

else {
                             -> will check this if the above conditions doesn't match

}


==   check for the value 
=== checks for the value and the data type




*/

/*
let  var1;


console.log(typeof var1);

if   (typeof var1 !== 'undefined'){
      console.log("It is Defined");
}

else{
      console.log("It is not defined");

}


// tertiary operator


//console.log(14>15 ? 'true' : 'false');


function max(   a ,  b){
  return a>b ? a : b;

}


console.log(max(10, 15));  // return 15


let swiarr = ['satvik' , 2,3 ];


console.log(swiarr[0]);

for( let i=0 ;i< swiarr.length; i++){

switch (swiarr[i]) {
    

  case 'satvik' :
      console.log("Age is 1");
      break;

  case 2 :
      console.log("Age is 2");
      break;

  default :
     console.log("this is default");
     break;

}

}


*/

//CHAPTER 7 END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//CHAPTER 8 START >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// LOOPS ::::
// FOR

/*

for( let i=0;i< 5;i++){

  console.log(i);
}

// while


let j=9;
while (j<10){
console.log(j);
j++;

}


/// do -while

let k=0;

do {

  console.log(k+1)
  k++;
}

while(k<=2) {

  

}



// FOR EACH

let arr = [20,40,50,6,7];

arr.forEach(function(e){
   
  console.log(e);

});

// other parameters for for each loop.

arr.forEach(function(element, index, array){

  console.log(element,index,array);
   



});


let obj = {

name : 'satvik',
age : 78,
type: 'dangerous',
os : 'ubuntu'

}




for (let key in obj){

  console.log(`Th ${key} of object is ${obj[key]}`)
}


// Function



function fun(a, b=1000){   // We can value to b if there is no parameter for b when function is invoed then it will take 1000

  return b;
}

console.log(fun(10,12));


// we can assign a function to a variable als0
const mygreet  = function greet(){


  return 1;
}


console.log(mygreet());



// use function inside object
const myobj = {
   
  firstName : 'Satvik',
  game : function(){


    return 'GTA';
  }


};

console.log(myobj.game())



let satz = ['fruit','vegetable', 'furniture'];


satz.forEach(function(element, index){
  

  console.log(`The element is ${element} and Index is ${index}`);
   

});

var f = function fr(){

  return 'h';
  console.log(fr());



}

//console.log(f());
//console.log(fr());


*/

//CHAPTER 8 END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>






//CHAPTER 9 START SA>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//DOM   -> Document object Model

// DOM is structutal representation of our html document. It is an object and has same properties as JS object.

// Have lot of function attributes methods

// Window object is a global level object in client side javascript which we also see in our browser


// prompt will ask you an question and you can fill the answer and store it in the variable.

//confirm it will ask you a question if you give yes it will give true otherwise on  clicking Cancel it will give false

/*

var b;
let a = window;
console.log(a);

//window.alert("Hi I am a hero");

//a = prompt("what is your name :");    
 //a = confirm('Do you want to celebrate');
//console.log(a);

console.log(innerHeight);
console.log(innerWidth);

console.log(scrollY)

console.log(location);
console.log(history);

console.log(document);

console.log(document.images);




*/
//CHAPTER 9 END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




//CHAPTER 10 Start >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// typeof document is an object
/*
document.all;

document.body;
document.forms[0];





let a = document;

a = document.all;

// how to access the html collections as array -->> we use Array.from(a) which means a is an html collections , Make array from a which is an html collection





Array.from(a).forEach(function(element){

  console.log(element);
  



});

print all links of the page which consists of the specific string


let links = document.links;
let href;
Array.from(links).forEach(function(e){
href = e.href;
if (href.includes('google')){
console.log(href);
}
});



let links = document.links;
Array.from(links).forEach(function(e){

if (e.href.includes('google')){
console.log(e.href);
}
});

*/
/*

console.log(document.links[0].href);  //For getting first link   


console.log(document.links[1].href);   //for getting the second link links


*/



//CHAPTER 10 END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//CHAPTER 11 START >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// DOM SELECTOR--->> For selecting any selectors in the DOM we use DOM SELECTORS



/*

Element Selectors:

1. Single Element Selector

let element = document.getElementById('myfirst');

2. Multi Element Selector



*/

//1. Single Element Selector

let element = document.getElementById('myfirst');


//element = element.className;

//element = element.childNodes;

//element = element.parentNode;

element.style.color= 'red';
element.innerText = 'I am the boss';
element.innerHTML = '<b>I am the boss</b>';


//console.log(element);


let sel = document.querySelector("#myfirst");    // for id ....Will only give the first element.


sel = document.querySelector('.child4');    // for class ... will give the first element

sel = document.querySelector('div');   //for any html tag  ... will give the first element
console.log(sel);


sel.style.color = "green";
console.log(sel);



// 2. Multi Element Selector 

let elems = document.getElementsByClassName('child');

console.log(elems[0]);


let elems1 = document.getElementsByClassName('container');

console.log(elems1[0].getElementsByClassName('child'));



let elem2 = document.getElementsByTagName('h1');

console.log(elem2);

Array.from(elem2).forEach(function(e){


  e.style.color = 'blue';
   

});





//CHAPTER 11 END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>