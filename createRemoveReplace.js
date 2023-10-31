console.log("I am in  hey");

// how to create element

let element = document.createElement('li');
let text = document.createTextNode("I am a text node");

element.appendChild(text);

element.className = 'childul';
element.id = 'createdLi';

element.setAttribute('title', 'mytitle');
// element.innerText = 'Hello this is created by satvik';

console.log(element);

//  how to append element



let ul = document.querySelector('ul.this');

console.log(ul);


ul.appendChild(element);




console.log(ul);



// How to replace an element



let elem2 = document.createElement('h3');
elem2.id = 'idelem2';
elem2.className = 'celem2';

let text1 = document.createTextNode("This is created for elem 2");

elem2.appendChild(text1);


element.replaceWith(elem2);


console.log(element);

let my = document.getElementById('thisid');    // this should be the parent node like UL

my.replaceChild(element,document.getElementById('fl'));   // replaceChild(new element, new element will replace this element)   inside the UL 

my.removeChild(document.getElementById('ll'));



let pr = elem2.getAttribute('id');  // gives the id of the elem2 attribute

console.log(pr);

let pr1 = elem2.hasAttribute("href");  // we can check if the attribute is present or not

console.log(pr1);

elem2.removeAttribute('id');

console.log(elem2);

let pr3 = elem2.setAttribute('id','idelem23');
console.log(elem2);


